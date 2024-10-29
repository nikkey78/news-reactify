import styles from './styles.module.css';
import { useState, useEffect } from 'react';

import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList.jsx';

import { getNews } from '../../api/apiNews';

export default function Main() {
   const [news, setNews] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            setLoading(true)
            const response = await getNews();
            setNews(response.news);
            setLoading(false);
         } catch (err) {
            console.log(err);
         }
      };

      fetchNews();
   }, []);

   return (
      <main className={styles.main}>
         {news.length > 0 && !loading ? (
            <NewsBanner item={news[0]} />
         ) : (
            <Skeleton count={1} type='banner' />
         )}
         {!loading ? (
            <NewsList news={news} />
         ) : (
               <Skeleton count={10} type='item' />
         )}{' '}
      </main>
   );
}
