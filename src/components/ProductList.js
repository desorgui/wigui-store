import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

const ProductList = () => {
  const products =  useSelector((state) => state.products);

  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      filter === "all" ? products : products.filter(item => item.category === filter)
    );
  }, [filter, products, filteredItems]);

  const handleFilterClick = category => {
    setFilter(category);
  };

  const [currentPage, setCurrentPage] = useState(1);

  console.log(filteredItems);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    console.log('firstPageIndex', firstPageIndex);
    console.table(filteredItems.slice(firstPageIndex, lastPageIndex));
    return filteredItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="container mx-auto max-w-[80%]">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left font-bold lg:my-8">Products.</h2>
        <ul className="hidden md:flex mx-auto font-semibold font-heading space-x-12 mb-12">

          <li><a className="hover:text-gray-200 current:text-red-500 active" href="#" onClick={() => handleFilterClick('all')}>All (30)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('smartphones')}>Smartphones (5)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('laptops')}>Laptops (5)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('fragrances')}>fragrances (5)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('skinkare')}>Skincare (5)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('groceries')}>Groceries (5)</a></li>
          <li><a className="hover:text-gray-200" href="#" onClick={() => handleFilterClick('home-decoration')}>Home decoration (5)</a></li>

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
      totalCount={filteredItems.length}
      pageSize={6}
      onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductList;