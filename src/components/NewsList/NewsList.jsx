import styles from './styles.module.css';

import {NewsItem} from '../NewsItem/NewsItem'

export function NewsList({ news }) {
   return (
      <ul className={styles.list}>
         {news && news.map(item => (
           <NewsItem key={item.id} item={ item} />
         ))}
      </ul>
   );
}
