import React, { useState } from 'react';
import cn from 'classnames';

import styles from './paginator.module.css';

const Paginator = (props) => {
  const {
    totalItemsCount, currentPage, onPageChanged, pageSize, portionSize = 10,
  } = props;

  const [portionNumber, setPortionNumber] = useState(1);
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const rightPortionPageNumber = portionNumber * portionSize;
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const pages = [...Array(pagesCount).keys()];

  const leftBtn = () => {
    return (
      portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
    )
  };

  const rightBtn = () => {
    return (
      portionCount > portionNumber &&
      <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
    )
  };


  return (
    <div className={styles.paginator}>
      {leftBtn()}
      {
        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
          return <span className={cn({
            [styles.selectedPage]: currentPage === p
          }, styles.pageNumber)}
            key={p}
            onClick={(e) => {
              onPageChanged(p);
            }}>{p}</span>
        })
      }
      {rightBtn()}
    </div>
  );
};

export default Paginator;


  // const pagesMaper = (page) => {
  //   const isCurrent = currentPage === page;
  //   return (
  //     <span
  //       key={page}
  //       role="button"
  //       tabIndex={0}
  //       className={isCurrent ? styles.selectedPage : null}
  //       onClick={() => onPageChanged(page)}
  //       onKeyPress={() => onPageChanged(page)}
  //     >
  //       {page}
  //     </span>
  //   );
  // };

  // const pagesMap = pages.map(pagesMaper);
