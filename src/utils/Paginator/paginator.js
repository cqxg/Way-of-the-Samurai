import React from 'react';

import styles from './paginator.module.css';

const paginator = (props) => {
  const {
    totalUsersCount, currentPage, onPageChanged, pageSize,
  } = props;
  
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [...Array(pagesCount).keys()];

  const pagesMap = () => pages.map((page) => {
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
  });

  return (
    <div>
      {pagesMap()}
    </div>
  );
};

export default paginator;
