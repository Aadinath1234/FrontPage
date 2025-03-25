import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div   >
      <div className="navbar  shadow-sm gap-14 bg-yellow-600 ">
        <ul className="flex     gap-4 justify-center  items-center max-sm:ml-2 px-4 w-80  ">
            <li className="font-sans  font-semibold text-lg md:w-20">Follow Us </li>
            <li className="text-xl"><IoLogoInstagram /> </li>
            <li className="text-xl"><FaXTwitter /></li>
            <li className="text-xl"><FaFacebookF /></li>
        </ul>
        <div className="hidden lg:block ">
        <p className="flex   justify-center items-center ml-20  w-96  min-md:ml-40  ">Sign up  get 20% off for all collection  </p>
        </div>
        

        <div className=" hidden sm:block ">
             <ul className="flex ml-20 items-center gap-2   md:px-20  ">
                <li><FaPhoneAlt /></li>
                <li>+1234-56789</li>
             </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

