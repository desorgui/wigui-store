import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { usePagination, DOTS } from './hooks/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    GivenClassName,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
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

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container flex gap-4 justify-center items-center my-12 ', { [GivenClassName]: GivenClassName })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item disabled:pointer-events-none cursor-pointer', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        &#60; prev
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item cursor-pointer current:bg-slate-500 current:text-white px-2 border-2 rounded-full border-zinc-500', {
              active: pageNumber === currentPage,
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
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        next &#62;
      </li>
    </ul>
  );
};

export default Pagination;

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  GivenClassName: PropTypes.string.isRequired,
};
