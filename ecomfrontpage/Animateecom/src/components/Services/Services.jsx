// import React from "react";
// import { MdLocalShipping } from "react-icons/md";
// import { FaCartShopping } from "react-icons/fa6";
// import { MdOutlineSupport } from "react-icons/md";
// import { GiReturnArrow } from "react-icons/gi";
// import * as motion from "motion/react-client";

// const box = {
//   width:"auto",
//   height:"auto",

//   borderRadius: 1,
// };

// function Services() {
//   return (
//     <div className="flex p-10 max-sm:p-4 gap-4  max-sm:flex-col max-lg:flex-col max-lg:ml-22">
//       <motion.div
//         className="card"
//         style={box}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="card card-border border-2 border-black max-sm:w-50  bg-orange-100 rounded-2xl w-80">
//           <div className="card-body">
//             <p className="text-4xl px-12 max-md:py-4  items-center rounded-full w-2 bg-yellow-600 ">
//               <MdLocalShipping />
//             </p>
//             <h2 className="card-title md:px-2 md:w-40 mt-4">
//               Fast and Free Shipping{" "}
//             </h2>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         className="card"
//         style={box}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="card card-border border-2 border-black max-sm:w-50 max-lg:w-80 bg-orange-100 rounded-2xl w-70">
//           <div className="card-body">
//             <p className="text-4xl px-12 max-md:py-4 items-center rounded-full w-2 bg-yellow-600">
//               <FaCartShopping />
//             </p>
//             <h2 className="card-title px-2 mt-4 ">Easy to Shop </h2>
//           </div>
//         </div>
//       </motion.div>


//    <motion.div className="card"
//         style={box}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1 }}>

//    <div className="card card-border border-2 border-black max-sm:w-50  bg-orange-100 rounded-2xl  w-80">
//         <div className="card-body">
//           <p className="text-4xl px-12 max-md:py-4 items-center rounded-full w-2 bg-yellow-600">
//             <MdOutlineSupport />
//           </p>
//           <h2 className="card-title px-2 mt-4">24/7 Support </h2>
//         </div>
//       </div>
//    </motion.div>



//       <motion.div className="card"
//         style={box}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1 }}>
//       <div className="card card-border border-2 border-black max-sm:w-50  bg-orange-100 rounded-2xl  w-80">
//         <div className="card-body">
//           <p className="text-4xl px-12 max-md:px-12  items-center rounded-full w-2 bg-yellow-600">
//             <GiReturnArrow />
//           </p>
//           <h2 className="card-title px-2 md:w-30 mt-4">Hussle Free returns </h2>
//         </div>
//       </div>
        
//         </motion.div>   
      
//     </div>
//   );
// }

// export default Services;




import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import * as motion from "motion/react-client";

const box = {
  width: "auto",
  height: "auto",
  borderRadius: 1,
};

function Services() {
  return (
    <div className="flex flex-wrap  p-20 max-sm: gap-4 max-sm:flex-col max-lg:flex-col max-lg:justify-center max-lg:items-center justify-center">
      {/* Fast and Free Shipping */}
      <motion.div
        className="card"
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <div className="card card-border border-2 border-black  sm:w-80 max-sm:w-40 md:w-80 lg:w-80 bg-orange-100 rounded-2xl">
          <div className="card-body text-center py-6">
            <p className="text-4xl text-yellow-600 mx-auto mb-4">
              <MdLocalShipping />
            </p>
            <h2 className="card-title text-lg font-semibold justify-center items-center">
              Fast and Free Shipping
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Easy to Shop */}
      <motion.div
        className="card"
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <div className="card card-border border-2 border-black max-sm:w-full sm:w-80 md:w-80 lg:w-80 bg-orange-100 rounded-2xl">
          <div className="card-body text-center py-6">
            <p className="text-4xl text-yellow-600 mx-auto mb-4">
              <FaCartShopping />
            </p>
            <h2 className="card-title text-lg font-semibold justify-center items-center">Easy to Shop</h2>
          </div>
        </div>
      </motion.div>

      {/* 24/7 Support */}
      <motion.div
        className="card"
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <div className="card card-border border-2 border-black max-sm:w-full sm:w-80 md:w-80 lg:w-80 bg-orange-100 rounded-2xl">
          <div className="card-body text-center py-6">
            <p className="text-4xl text-yellow-600 mx-auto mb-4">
              <MdOutlineSupport />
            </p>
            <h2 className="card-title text-lg font-semibold justify-center items-center">24/7 Support</h2>
          </div>
        </div>
      </motion.div>

      {/* Hassle Free Returns */}
      <motion.div
        className="card"
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <div className="card card-border border-2 border-black max-sm:w-40 sm:w-80 md:w-80 lg:w-80 bg-orange-100 rounded-2xl">
          <div className="card-body text-center py-6">
            <p className="text-4xl text-yellow-600 mx-auto mb-4">
              <GiReturnArrow />
            </p>
            <h2 className="card-title text-lg font-semibold justify-center items-center">
              Hassle-Free Returns
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
