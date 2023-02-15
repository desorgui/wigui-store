import React from "react";
import { NavLink } from 'react-router-dom';
import { addProductCart } from "../redux/carts/carts";
import { useDispatch } from "react-redux";

const CardItem = (props) => {
  const { id, title, price, rating, thumbnail } = props;

  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    const product = {
      id: id,
      title: title,
      price: price,
      thumbnail: thumbnail,
    };
    dispatch(addProductCart(product));
  }

  return (
    <>      
      <div className="max-w-2xl w-full px-4 sm:px-0">
        <div className="bg-white shadow-md rounded-lg dark:bg-gray-800 mx-auto dark:border-gray-700">
          <div className="h-56 overflow-hidden w-full flex justify-center">
            <NavLink to={`/products/${id}`}>
              <img className="h-full" src={thumbnail} alt="product" />
            </NavLink>
          </div>
          <div className="px-5 pb-5">
            <NavLink to={`/products/${id}`}>
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">{title}</h3>
            </NavLink>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-300 dark:text-blue-800">{rating}</span>
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900 dark:text-white">$ {price}</span>
                <NavLink to="#"
                  onClick={handleAddToCartClick}
                  className="text-white relative overflow-hidden focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-32 h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <span className="text-center pt-4 bg-gradient-to-r left-0 top-0 from-[#ffffff79] to-[#96969640] z-20 absolute backdrop-blur-md w-full h-full leading-12">Add to cart</span>
                  <span className="absolute top-0 left-0 z-10 w-full h-full transition-colors duration-300 bg-[#ec331a]" />
                </NavLink>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;