import React, { useState } from 'react';
import classnames from 'classnames';

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
  const filteredPages = pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber);

  const leftBtn = () => (
    portionNumber > 1
      && <button onClick={() => { setPortionNumber(portionNumber - 1); }}>PREV</button>
  );

  const rightBtn = () => (
    portionCount > portionNumber
      && <button onClick={() => { setPortionNumber(portionNumber + 1); }}>Next</button>
  );

  const paginatorBody = filteredPages.map((p) => (
    <span
      className={classnames({ [styles.selectedPage]: currentPage === p }, styles.pageNumber)}
      key={p}
      onClick={(e) => { onPageChanged(p); }}
    >
      {p}
    </span>
  ));

  return (
    <div className={styles.paginator}>
      {leftBtn()}
      {paginatorBody}
      {rightBtn()}
    </div>
  );
};

export default Paginator;