import React from 'react';
import logo from '../images/logo2.png';

const Footer = () => (
  <footer className="p-4 bg-white rounded-lg shadow md:px-6 xl:px-12 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
        <img src={logo} className="h-8 mr-3" alt="Wigui Store Logo" />
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <span className="mr-4 hover:underline md:mr-6 ">About</span>
        </li>
        <li>
          <span className="mr-4 hover:underline md:mr-6">Privacy Policy</span>
        </li>
        <li>
          <span className="mr-4 hover:underline md:mr-6 ">Licensing</span>
        </li>
        <li>
          <span className="hover:underline">Contact</span>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      ©
      <a href="https://dguishny.me" className="hover:underline">Desor Guishny™</a>
      . All Rights Reserved.
    </span>
  </footer>
);

export default Footer;
