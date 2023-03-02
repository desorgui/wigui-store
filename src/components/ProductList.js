import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Pagination from './Pagination';
import filterIcon from '../images/filter.svg';

const ProductList = (props) => {
  const { increment, handleAddToCartClick } = props;

  const [openDropdown, setOpenDropdown] = useState(false);

  const products = useSelector((state) => state.products);

  const productsData = products;

  const countByCategory = productsData.reduce((acc, product) => {
    const { category } = product;
    return {
      ...acc,
      [category]: (acc[category] || 0) + 1,
    };
  }, {});

  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      filter === 'all' ? products : products.filter((item) => item.category === filter),
    );
  }, [filter, products]);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const handleDropdownClick = (category) => {
    setFilter(category);
    setOpenDropdown(false);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    return filteredItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredItems]);

  return (
    <>
      <div className="container mx-auto max-w-[80%] mb-12" id="products">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left font-bold lg:my-8">Products.</h2>
        <ul className="hidden md:flex mx-auto font-semibold font-heading space-x-12 mb-12">
          <li className={`hover:text-red-500  cursor-pointer ${filter === 'all' ? 'current:text-red-500 active' : ''}`}>
            <button type="button" onClick={() => handleFilterClick('all')}>
              All (
              {products.length}
              )
            </button>
          </li>
          {Object.keys(countByCategory).map((category) => (
            <li
              className={`hover:text-red-500 cursor-pointer ${filter === category ? 'current:text-red-500 active' : ''}`}
              key={category}
            >
              <button type="button" onClick={() => handleFilterClick(category)}>
                {category}
                {' '}
                (
                {countByCategory[category]}
                )
              </button>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden justify-start z-50 mb-8">
          <div>
            <div className="relative" data-te-dropdown-ref>
              <button
                className="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:shad motion-reduce:transition-none"
                type="button"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <img src={filterIcon} alt="Filter Icon" className="text-gray-900 w-4 mr-4" />
                Filter
              </button>
              {openDropdown && (
                <ul
                  className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 block"
                  aria-labelledby="dropdownMenuButton1ds"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <button
                      type="button"
                      className={`text-left block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600 ${filter === 'all' ? 'pointer-events-none text-neutral-400' : ''}`}
                      onClick={() => handleDropdownClick('all')}
                    >
                      All (
                      {products.length}
                      )
                    </button>
                  </li>
                  {Object.keys(countByCategory).map((category) => (
                    <li key={category}>
                      <button
                        type="button"
                        className={`text-left block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600 ${filter === category ? 'pointer-events-none text-neutral-400' : ''}`}
                        onClick={() => handleDropdownClick(category)}
                      >
                        {category}
                        {' '}
                        (
                        {countByCategory[category]}
                        )
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {currentTableData.map((product) => (
            <CardItem key={product.id} {...product} increment={increment} handleAddToCartClick={handleAddToCartClick} /> // eslint-disable-line
          ))}
        </div>
      </div>
      <Pagination
        GivenClassName="pagination-bar"
        currentPage={currentPage}
        currentTableData={currentTableData}
        totalCount={filteredItems.length}
        pageSize={6}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  increment: PropTypes.func.isRequired,
  handleAddToCartClick: PropTypes.func.isRequired,
};
