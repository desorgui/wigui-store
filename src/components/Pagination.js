import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './hooks/usePagination';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container flex gap-4 justify-center my-12 ', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item disabled:pointer-events-none cursor-pointer', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        prev
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item cursor-pointer', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item cursor-pointer', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        next
      </li>
    </ul>
  );
};

export default Pagination;