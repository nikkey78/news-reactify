import styles from './style.module.css';

export function Pagination({
   currentPage,
   totalPages,
   onPrevPage,
   onNextPage,
   onClickPage,
}) {
   return (
      <div className={styles.pagination}>
         <button
            className={styles.arrow}
            onClick={onPrevPage}
            disabled={currentPage <= 1}>
            {'<'}
         </button>

         <div className={styles.list}>
            {[...Array(totalPages)].map((_, index) => {
               return (
                  <button
                     key={index}
                     className={styles.pageNumber}
                     disabled={currentPage === index + 1}
                     onClick={() => onClickPage(index + 1)}>
                     {index + 1}
                  </button>
               );
            })}
         </div>
         <button
            className={styles.arrow}
            onClick={onNextPage}
            disabled={currentPage >= totalPages}>
            {'>'}
         </button>
      </div>
   );
}

