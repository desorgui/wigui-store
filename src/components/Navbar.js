import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/logo2.png';
import ProfileDropdown from './ProfileDropdown';

const Navbar = (props) => {
  const { counter, handleOpen } = props;

  return (
    <div className="flex flex-wrap w-full fixed z-50 top-0">
      <section className="relative mx-auto w-full">
        {/* <!-- navbar --> */}
        <nav className="flex justify-between bg-white w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <NavLink className="text-3xl font-bold font-heading" to="/">
              <img className="h-9" src={logo} alt="logo" />
            </NavLink>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><NavLink className="hover:text-red-500" to="/">Home</NavLink></li>
              <li><NavLink className="hover:text-red-500" to="#">Category</NavLink></li>
              <li><NavLink className="hover:text-red-500" to="#">Collections</NavLink></li>
              <li><NavLink className="hover:text-red-500" to="#">Contact Us</NavLink></li>
            </ul>
            {/* <!-- Header Icons --> */}
            <div className="hidden xl:flex items-center space-x-5 items-center">
              <NavLink className="hidden hover:text-red-500" to="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </NavLink>
              <NavLink className="flex items-center hover:text-red-500" onClick={handleOpen} to="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 justify-center items-center text-white">
                    {counter}
                  </span>
                </span>
              </NavLink>
              {/* <!-- Sign In / Register      --> */}
              <NavLink className="flex items-center hover:text-red-500" data-dropdown-toggle="dropdownAvatar" to="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </NavLink>

            </div>
          </div>
          {/* <!-- Responsive navbar --> */}
          <NavLink className="xl:hidden flex mr-6 items-center" onClick={handleOpen} to="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 justify-center items-center text-white">
                {counter}
              </span>
            </span>
          </NavLink>
          <NavLink className="navbar-burger self-center mr-12 xl:hidden" to="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </NavLink>
        </nav>
      </section>
      <ProfileDropdown />
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  counter: PropTypes.number.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
