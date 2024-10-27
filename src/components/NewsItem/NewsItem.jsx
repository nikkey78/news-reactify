/* eslint-disable react/prop-types */
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

export function NewsItem({ item }) {
   return (
      <li className={styles.item}>
         <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${item.image})` }}></div>
         <div className={styles.info}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
               {formatTimeAgo(item.published)} by <span>{item.author}</span>
            </p>
         </div>
      </li>
   );
}
