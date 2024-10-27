import styles from './styles.module.css';
import { useState, useEffect } from 'react';

import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList.jsx';

import { getNews } from '../../api/apiNews';

export default function Main() {
   const [news, setNews] = useState([]);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            setNews(response.news);

            // console.log(response.news);
         } catch (err) {
            console.log(err);
         }
      };

      fetchNews();
   }, []);

   return (
      <main className={styles.main}>
         {news.length > 0 && <NewsBanner item={news[0]} />}
         <NewsList news={news} />
      </main>
   );
}
