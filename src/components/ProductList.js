import React, { useState, useMemo } from 'react';
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

const ProductList = () => {
  const products =  useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">Latest Articles</h2>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {currentTableData.map((product) => (
              <CardItem key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Pagination
      className="pagination-bar"
      currentPage={currentPage}
      totalCount={products?.length}
      pageSize={6}
      onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ProductList;