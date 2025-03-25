import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a >Services </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex m-5">
          <ul className="menu menu-horizontal px-1 font-mono font-bold text-lg">
            <li>
              <a href="#">Home</a>{" "}
              {/* Changed href to # for placeholder link */}
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a href="#">Menu 1</a>
                  </li>
                  <li>
                    <a href="#">Menu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">New Collection</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Men's Wear</a>
            </li>
            <li>
              <a href="#">Latest Blogs</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end px-4 gap-2 max-lg:px-40 place-content-start ml-8 mb-20 max-sm:mb-10 max-lg:mt-16 max-sm:mt-8">
          <ul className="flex gap-4">
            <li>
              {" "}
              <IoSearchSharp />
            </li>
            <li>
              {" "}
              <FaRegHeart />
            </li>
            <li>
              {" "}
              <FaUserAlt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;








// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";

// function Navbar() {
//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         {/* Hamburger for small screens */}
//         <div className="navbar-start lg:hidden">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Item 1</a>
//               </li>
//               <li>
//                 <a>Parent</a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>Item 3</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Main Menu for Medium to Large Screens */}
//         <div className="navbar-center hidden lg:flex m-5">
//           <ul className="menu menu-horizontal px-1 font-mono font-bold text-lg">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <details>
//                 <summary>About</summary>
//                 <ul className="p-2">
//                   <li>
//                     <a href="#">Menu 1</a>
//                   </li>
//                   <li>
//                     <a href="#">Menu 2</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <a href="#">Contact Us</a>
//             </li>
//             <li>
//               <a href="#">New Collection</a>
//             </li>
//             <li>
//               <a href="#">New Arrivals</a>
//             </li>
//             <li>
//               <a href="#">Sales</a>
//             </li>
//             <li>
//               <a href="#">Men's Wear</a>
//             </li>
//             <li>
//               <a href="#">Latest Blogs</a>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side Icons (Search, Heart, User) */}
//         <div className="navbar-end px-4 gap-2 max-lg:px-40 place-content-start ml-8 mb-20 max-sm:mb-10 max-lg:mt-16 max-sm:mt-8">
//           <ul className="flex gap-4">
//             <li>
//               <IoSearchSharp className="text-xl" />
//             </li>
//             <li>
//               <FaRegHeart className="text-xl" />
//             </li>
//             <li>
//               <FaUserAlt className="text-xl" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
