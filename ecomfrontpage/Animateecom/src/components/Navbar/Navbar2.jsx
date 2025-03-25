import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

function Stylesheet() {
  return (
    <style>{`
          .container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              visibility: hidden;
          }

          .split-char {
              will-change: transform, opacity;
          }
      `}</style>
  );
}

const ball = {
  width: "auto",
  height: "auto",
  borderRadius: "50%",
};

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu Toggled", !isMenuOpen); // Log whether the menu is opening or closing
    setIsMenuOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <div>
      <motion.div
        style={ball}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="navbar bg-teal-800 shadow-sm gap-20 h-20 px-4">
          <div className="flex items-center">
            <img
              src="\src\assets\logo.png"
              alt="logo"
              className="w-60 h-30 md:w-20 sm:w-16 max-sm:h-20 max-sm:w-30 rounded-lg mt-4"
            />
          </div>


              <div className=" ">
                <ul className="flex flex-row gap-12 p-12 ml-20 max-lg:hidden font-semibold  text-2xl text-white ">
                  <li>Home</li>
                  <li>About </li>
                  <li>Contact Us </li>
                  <li>Services</li>
                </ul>
              </div>






          {/* Desktop Menu */}
          <div className=" max-lg:hidden   sm:flex flex-grow justify-center items-center text-white gap-8 font-sans font-normal text-lg">
            <ul className="sm:hidden">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="lg:hidden flex items-center max-sm:ml-30">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Icons */}
          <div className="flex gap-4 text-white max-lg:hidden">
            <CiSearch className="text-2xl" />
            <CiHeart className="text-2xl" />
            <CiShoppingCart className="text-2xl" />
            <CiUser className="text-2xl" />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black/90 text-white mt-4 rounded-md shadow-lg absolute top-20 left-0 w-full z-50">
              <ul className="flex flex-col items-center gap-4 py-12">
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar2;
