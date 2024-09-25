'use client';
import React, { useState } from 'react';
import CartModal from 'components/cart/modal';
import NavLink from './navlink'; // Import the NavLink component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto container">
        <div className="relative flex h-16 justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
              <img
                className="h-10 w-auto"
                src="images/logo.png"
                alt="SilkCurl"
              />
              </a>
              
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Links */}
              <NavLink href="/produktai" title="Parduotuvė" />
              <NavLink href="/apie-mus" title="Apie mus" />
              <NavLink href="/kontaktai" title="Kontaktai" />
              <div className="relative group">
                <NavLink href="#" title="Politikos" />
                <div className="absolute left-0 z-10 hidden w-48 bg-white text-sm shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block transition-opacity ease-out duration-200 opacity-0 group-hover:opacity-100">
                  <div className="p-2">
                    <NavLink href="/politikos/privatumo-politika" title="Privatumo politika" />
                    <NavLink href="/politikos/grazinimas" title="Grąžinimas" />
                    <NavLink href="/politikos/pristatymas" title="Pristatymas" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Profile, Cart) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Cart Modal */}
            <CartModal />

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={toggleProfileDropdown} // Toggle dropdown on button click
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>

              {/* Conditionally render the profile dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <NavLink href="#" title="Your Profile" />
                  <NavLink href="#" title="Settings" />
                  <NavLink href="#" title="Sign out" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 pb-4 pt-2">
            <NavLink href="/produktai" title="Parduotuvė" />
            <NavLink href="/apie-mus" title="Apie mus" />
            <NavLink href="/kontaktai" title="Kontaktai" />
            <NavLink href="/politikos/privatumo-politika" title="Privatumo politika" />
            <NavLink href="/politikos/grazinimas" title="Grąžinimas" />
            <NavLink href="/politikos/pristatymas" title="Pristatymas" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;