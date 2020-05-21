import React from 'react';

import styles from './paginator.module.css';

const paginator = (props) => {
  const {
    totalItemsCount, currentPage, onPageChanged, pageSize, portionSize = 10,
  } = props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [...Array(pagesCount).keys()];

  const pagesMaper = (page) => {
    const isCurrent = currentPage === page;
    return (
      <span
        key={page}
        role="button"
        tabIndex={0}
        className={isCurrent ? styles.selectedPage : null}
        onClick={() => onPageChanged(page)}
        onKeyPress={() => onPageChanged(page)}
      >
        {page}
      </span>
    );
  };

  const pagesMap = pages.map(pagesMaper);

  return (
    <div>
      {pagesMap}
    </div>
  );
};

export default paginator;
