import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo-white.svg";
import { NavLink } from "react-router-dom";
import { IoLanguage, IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <li className="text-[14px] font-bold uppercase text-white hover:text-gray-300">
          Framework
        </li>
      </NavLink>
      <NavLink to="/">
        <li className="text-[14px] font-bold uppercase text-white hover:text-gray-300">
          Highlight
        </li>
      </NavLink>
      <NavLink to="/">
        <li className="text-[14px] font-bold uppercase text-white hover:text-gray-300">
          Working group members
        </li>
      </NavLink>
      <NavLink to="/">
        <li className="text-[14px] font-bold uppercase text-white hover:text-gray-300">
          Get Involved
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="max-w-[1280px] mx-auto">
      <nav className="flex items-center justify-between px-[10px]">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-14 md:h-16 lg:h-24" />
        </div>

        {/* Desktop Nav items */}
        <div className="hidden md:flex gap-5 items-center">
          <ul className="flex gap-5">{navLinks}</ul>

          {/* Custom Hover Dropdown */}
          <div
            className="relative hover:bg-white text-white hover:text-black rounded-lg"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-black p-1 border-2 border-white rounded-lg hover:rounded-none hover:rounded-t-lg">
              <IoLanguage className="text-xl" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 w-40 bg-white text-black rounded-b-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Español
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Français
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Arabic
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden" ref={mobileMenuRef}>
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-2 bg-gray-800 p-4 text-center text-white">
            {navLinks}
          </ul>
          <div
            className="relative hover:bg-white text-white hover:text-black rounded-lg"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            ref={dropdownRef}
          >
            <button className="w-full hover:text-black p-1 mt-2 border-2 border-white rounded-lg hover:rounded-none hover:rounded-t-lg flex justify-center">
              <IoLanguage className="text-xl" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full bg-white text-black rounded-b-lg shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Español
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Français
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Arabic
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
