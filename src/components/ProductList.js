import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

const ProductList = () => {
  const products =  useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {products.map((product) => (
            <CardItem {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;