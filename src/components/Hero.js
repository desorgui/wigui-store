import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import marketImg from '../images/market.png';

import PaginatedItems from './ProductList';

const Hero = () => {

  const products = useSelector((state) => state.products); // eslint-disable-line eqeqeq
//   function random_item(items){   
//     return items[Math.floor(Math.random()*items.length)];
//   }

//   const product = random_item(products);
  return (
        <>
        <header className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col-reverse px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg lg:mx-12 lg:order-2">
                        <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">The best Place to order online</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <div className="mt-12">
                            <NavLink to="#" className="w-48 bg-[#e74c3c] p-4 transition-transform rounded-lg opacity-80 hover:opacity-100 active:top-[4px] active:shadow-[0_3px_2px_#c0392b,0_3px_5px_#111] shadow-[0_7px_2px_#c0392b,0_8px_5px_#111] border-none text-white relative font-bold text-sm">
                                Start Shopping                        
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex items-center absolute right-20 justify-center w-96 h-96 bg-gradient-to-r from-[#ffffff79] to-[#96969640] lg:w-96 float-right rounded-full" />
                <img src={marketImg} alt='market' className="lg:absolute object-cover w-2/3 right-0" />
            </div>
        </header>
        <PaginatedItems itemsPerPage={6} />
</>
)
};

export default Hero;