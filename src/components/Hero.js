import React from 'react';
import { NavLink } from 'react-router-dom';
import marketImg from '../images/market.png';

const Hero = () => (
  <>
    <header className="bg-white dark:bg-gray-900 mt-20">
      <div className="container flex flex-col-reverse px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 z-10">
          <div className="max-w-full lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">The best Place to order online</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
            <div className="mt-12 pb-16">
              <NavLink to="#" className="w-48 bg-[#e74c3c] p-4 transition-transform rounded-lg opacity-80 hover:opacity-100 active:top-[4px] active:shadow-[0_3px_2px_#c0392b,0_3px_5px_#111] shadow-[0_7px_2px_#c0392b,0_8px_5px_#111] border-none text-white relative font-bold text-sm">
                Start Shopping
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex items-center absolute right-20 justify-center bg-gradient-to-r z-0 from-[#ffffff79] to-[#96969640] lg:w-96 float-right rounded-full" />
        <img src={marketImg} alt="market" className="lg:absolute object-cover md:w-full lg:w-1/2 right-0 z-10" />
      </div>
    </header>
  </>
);

export default Hero;
