import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

const ProductList = () => {
  const products =  useSelector((state) => state.products);

  const product30 = new Array(30);

  const productsData = products;
  
  const countByCategory = productsData.reduce((acc, product) => {
    const category = product.category;
    return {
      ...acc,
      [category]: (acc[category] || 0) + 1
    }
  }, {});  

  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      filter === "all" ? products : products.filter(item => item.category === filter)
    );
  }, [filter, products]);

  const handleFilterClick = category => {
    setFilter(category);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    return filteredItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredItems]);

  return (
    <>
      <div className="container mx-auto max-w-[80%] mb-12">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left font-bold lg:my-8">Products.</h2>
        <ul className="hidden md:flex mx-auto font-semibold font-heading space-x-12 mb-12">
        <li className="hover:text-red-500  cursor-pointer current:text-red-500 active" onClick={() => handleFilterClick('all')}>All ({products.length})</li>
          {Object.keys(countByCategory).map(category => (
            <li className="hover:text-red-500 cursor-pointer" key={category} onClick={() => handleFilterClick(category)}>{category} ({countByCategory[category]})</li>
          ))}
        </ul>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {currentTableData.map((product) => (
              <CardItem key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Pagination
      className="pagination-bar"
      currentPage={currentPage}
      currentTableData={currentTableData}
      totalCount={product30.length}
      pageSize={6}
      onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductList;