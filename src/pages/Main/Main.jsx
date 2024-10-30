import styles from './styles.module.css';
import { useState, useEffect } from 'react';

import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList.jsx';
import { Pagination } from '../../components/Pagination/Pagination.jsx';

import { getNews } from '../../api/apiNews';

export default function Main() {
   const [news, setNews] = useState([]);
   const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const TOTAL_PAGE = 10;
   const PAGE_SIZE = 10;

   const fetchNews = async currentPage => {
      try {
         setLoading(true);
         const response = await getNews(currentPage, PAGE_SIZE);
         setNews(response.news);
         setLoading(false);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchNews(currentPage);
   }, [currentPage]);

   const handleNextPage = () => {
      if (currentPage < TOTAL_PAGE) {
         setCurrentPage(currentPage + 1);
      }
   };

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleClickPage = pageNumber => {
      setCurrentPage(pageNumber);
   };

   return (
      <main className={styles.main}>
         {news.length > 0 && !loading ? (
            <NewsBanner item={news[0]} />
         ) : (
            <Skeleton count={1} type='banner' />
         )}

         <Pagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGE}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
            onClickPage={handleClickPage}
         />

         {!loading ? <NewsList news={news} /> : <Skeleton count={10} type='item' />}

         <Pagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGE}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
            onClickPage={handleClickPage}
         />
      </main>
   );
}
