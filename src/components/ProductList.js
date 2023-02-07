import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import CardItem from "./CardItem";

const ProductList = () => {
  const products =  useSelector((state) => state.products);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">Latest Articles</h2>
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {products.map((product) => (
            <CardItem {...product} />
        ))}
      </div>
    </div>
  );
};

function PaginatedItems({ itemsPerPage }) {
  const products =  useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductList />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;