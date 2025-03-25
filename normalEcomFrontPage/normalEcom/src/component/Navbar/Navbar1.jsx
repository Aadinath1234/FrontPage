import React from "react";
import "../../index.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";

function Navbar1() {
  return (
    <div className="h-40 flex flex-col">
      <div className="flex flex-col navbar bg-yellow gap-4 justify-start items-center p-4 max-sm:p-2">
        <div className="flex flex-col ">
         <div className="flex flex-row gap-4 max-sm:w-24   max-lg:mr-28 max-sm:mr-40 max-sm:w-46 max-lg:w-20">
          {/* Social Media Icons */}
          <a className="btn-ghost text-3xl bg-yellow text- border-black border-2 p-1 skeleton  rounded-full h-10 w-10 justify-center max-sm:m-2">
            <BsFacebook />
          </a>
          <a className="btn-ghost text-3xl bg-yellow text-  border-black border-2 p-1 skeleton  rounded-full h-10 w-10 justify-center max-sm:m-2">
            <FaTwitter />
          </a>
          <a className="btn-ghost text-3xl bg-yellow text-  border-black border-2 p-1  skeleton  rounded-full h-10 w-10 justify-center max-sm:m-2">
            <FaInstagram />
          </a>
          <a className="btn-ghost text-3xl bg-yellow text-  border-black border-2 p-1  skeleton   rounded-full h-10 w-10 justify-center max-sm:m-2">
            <CgMail />
          </a>

          
        </div>
        <div className="w-44 h-30 sm:mt-4 sm:mr-4 max-sm:w-60 max-sm:h-30 max-lg:w-36 rounded-lg ml-auto max-sm:ml-0 flex justify-center items-center">
          <img
            src="src/assets/logo2.png"
            alt="logo1"
            className="rounded-box max-lg:w-50 max-lg:h-40 justify-center items-center max-sm:w-60 max-sm:h-50"
          />
        </div>



         </div>
        
        


        {/* Logo */}
        <div className="w-44 h-22 max-sm:hidden sm:hidden max-sm:w-32 max-sm:h-20 max-lg:w-60 rounded-lg ml-auto max-sm:ml-0 flex justify-center items-center">
          <img
            src="src/assets/logo2.png"
            alt="logo1"
            className="rounded-box max-lg:w-30 max-lg:h-12 max-sm:w-24 max-sm:h-10"
          />
        </div>

        {/* Dropdown Menu for My Account */}
        <div className="flex gap-4 dropdown dropdown-bottom mb-24 max-sm:mb-2 max-sm:hidden sm:hidden">
          <div
            tabIndex={0}
            role="button"
            className="flex gap-2 bg-yellow-600  text-white sm:text-black justify-start items-center p-2 rounded-lg"
          >
            <div className="mt-2">
              <FaUserAlt />
            </div>
            <div className="mt-1">My Account</div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
