import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeProductCart, incrementItemQuantity, decrementItemQuantity } from '../redux/carts/carts';

const CartPopup = (props) => {
  const {
    isOpen, isClose, decrement, cartItems, total,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveClick = (productId) => {
    decrement();
    dispatch(removeProductCart(productId));
  };

  return (
    <>
      {isOpen && (
      <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button type="button" onClick={isClose} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Close panel</span>
                          {/* <!-- Heroicon name: outline/x-mark --> */}
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.map((product) => (
                            <li className="flex py-6" key={product?.id}>
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={product?.thumbnail} alt={product?.title} className="h-full w-full object-cover object-center" />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      {product?.title}
                                    </h3>
                                    <p className="ml-4">
                                      $
                                      {product?.price}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex">
                                    <p className="text-gray-500">Qty:</p>
                                    <button className={`${product.quantity === 1 ? 'pointer-events-none' : ''} px-2`} type="button" onClick={() => dispatch(decrementItemQuantity(product.id))}>-</button>
                                    <p>{product.quantity}</p>
                                    <button className="px-2" type="button" onClick={() => dispatch(incrementItemQuantity(product.id))}>+</button>
                                  </div>

                                  <div className="flex">
                                    <button type="button" onClick={() => handleRemoveClick(product?.id)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>
                        $
                        {total}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link to="/checkout" onClick={isClose} className="flex items-center justify-center relative rounded-md border border-transparent bg-[#e74c3c] active:shadow-[0_3px_2px_#c0392b,0_3px_5px_#111] shadow-[0_7px_2px_#c0392b,0_8px_5px_#111] opacity-80 hover:opacity-100 active:top-[4px] px-6 py-3 text-base font-medium text-white">Checkout</Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default CartPopup;

CartPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
  total: PropTypes.number.isRequired,
};
