// // update 3 
// import React, { useEffect, useState } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// // Initial order of images
// const initialOrder = [
//   "#ff0088",
//   "#dd00ee",
//   "#9911ff",
//   "#0d63f8",
// ];

// const spring = {
//   type: "spring",
//   damping: 20,
//   stiffness: 300,
// };

// const container = {
//   listStyle: "none",
//   padding: 0,
//   margin: 0,
//   position: "relative",
//   display: "flex",
//   flexWrap: "wrap",
//   gap: 10,
//   width: 300,
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const item = {
//   width: 100,
//   height: 100,
//   borderRadius: "10px",
// };

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// function Hero() {
//   const [order, setOrder] = useState(initialOrder);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (order.length === 4) {
//         // Shuffle only when we have exactly 4 items in the order
//         setOrder(shuffle([...order]));
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [order]);

//   return (
//     <div>
//       <div className="hero bg-teal-800 hidden lg:block">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="flex px-20 gap-4 ml-20">
//             <div className="carousel rounded-box w-70">
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://www.thespruce.com/thmb/rTwTmEXOLhoRXniZEq_nrJtYioU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stunning-bedroom-4-588feaf43df78caebc597c43.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="http://cdn.home-designing.com/wp-content/uploads/2009/06/purple-bedroom.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://i.pinimg.com/originals/34/dd/ba/34ddba19c4a2dbb135ab0c55e79588e5.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="http://www.thewowdecor.com/wp-content/uploads/2015/07/cozy-master-bedrooms-idea.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//             </div>

//             <div className="carousel rounded-box w-30">
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://thumbs.dreamstime.com/b/vertical-frame-lit-bedroom-wood-flooring-single-bed-vertical-frame-lit-bedroom-wood-flooring-single-bed-168702554.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://c8.alamy.com/comp/2G5PJGB/bedroom-interior-with-yellow-unfolded-vertical-mount-murphy-wall-bed-pull-out-bed-stored-into-working-place-with-table-armchair-shelves-and-computer-2G5PJGB.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://thumbs.dreamstime.com/z/vertical-view-classy-bedroom-interior-colorful-bedding-round-pillows-140889043.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//             </div>

//             <div className="carousel rounded-box w-30">
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://tse2.mm.bing.net/th?id=OIP.tsT7oqcEtmPjGNY-KWGPywHaKn&pid=Api&P=0&h=180"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://tse3.mm.bing.net/th?id=OIP._VODIucRPZIS7nMHf1CKOQHaJQ&pid=Api&P=0&h=180"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://c8.alamy.com/comp/2G5PJ5P/bedroom-interior-with-yellow-folded-vertical-mount-murphy-wall-bed-pull-out-bed-stored-into-working-place-with-table-armchair-shelves-and-computer-2G5PJ5P.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <p className="bg-teal-700 skeleton rounded-2xl text-white w-65 h-8 justify-center items-center px-6 py-1 font-sans font-normal antialiased">
//               FURNITURE DESIGNS IDEAS
//             </p>
//             <h1 className="text-5xl font-medium py-2 text-white">
//               Modern Interior{" "}
//             </h1>
//             <h1 className="text-5xl font-medium text-white">Design Studio </h1>
//             <p className="py-6 w-96 text-blue-100">
//               Choosing the right furniture for your home online will add elegance
//               and functionality to your interior while also being cost effective
//               and long lasting.
//             </p>
//             <div>
//               <button className="btn bg-yellow-600 rounded-full p-6 w-40 skeleton">
//                 Shop Now <FaLongArrowAltRight />{" "}
//               </button>
//               <button className="underline offeset-4 px-4 text-blue-100">
//                 Follow Instagram{" "}
//               </button>
//             </div>

//             <div className="stats stats-vertical lg:stats-horizontal shadow mt-10 text-white ">
//               <div className="stat text-white ">
//                 <div className="stat-title text-white">Unique Styles </div>
//                 <div className="stat-value">31K</div>
//                 <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
//               </div>

//               <div className="stat">
//                 <div className="stat-title text-white">Happy Customers </div>
//                 <div className="stat-value">4,200</div>
//                 <div className="stat-desc text-white">↗︎ 400 (22%)</div>
//               </div>

//               <div className="stat">
//                 <div className="stat-title text-white">Certified Outlets </div>
//                 <div className="stat-value text-white">1,200</div>
//                 <div className="stat-desc text-white">↘︎ 90 (14%)</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-sm:justify-center block lg:hidden ">
//         <div className="bg-teal-800 max-sm:p-4 md:p-12 md:w-full ">
//           <p className="bg-teal-700 skeleton rounded-2xl md:ml-40 text-white w-65 h-8 justify-center items-center  px-6 py-1  font-sans font-normal antialiased ">
//             FURNITURE DESIGNS IDEAS
//           </p>
//           <h1 className="text-3xl font-medium py-2 md:ml-28 max-sm:w-60 max-sm:ml-4 text-white ">
//             Modern Interior Design Studio
//           </h1>
//           <h1 className="text-5xl font-medium text-white max-sm:hidden md:ml-38 ">
//             Design Studio{" "}
//           </h1>
//           <p className="py-6 w-96 text-blue-100 max-sm:w-60 max-sm:px-4 md:ml-30">
//             Choosing the right furniture for your home online will add elegance
//             and functionality to your interior while also being cost effective
//             and long lasting.
//           </p>
//           <div className="max-sm:w-60 md:ml-30 ">
//             <button className="btn bg-yellow-600 rounded-full p-6 w-40 max-sm:ml-6 skeleton">
//               Shop Now <FaLongArrowAltRight />{" "}
//             </button>
//             <button className="underline offeset-4 px-4 max-sm:p-4 max-sm:ml-6 text-blue-100">
//               Follow Instagram{" "}
//             </button>
//           </div>

//           <div className="stats stats-vertical lg:stats-horizontal shadow mt-10 text-white max-sm:hidden md:hidden ">
//             <div className="stat text-white ">
//               <div className="stat-title text-white">Unique Styles </div>
//               <div className="stat-value">31K</div>
//               <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
//             </div>

//             <div className="stat">
//               <div className="stat-title text-white">Happy Customers </div>
//               <div className="stat-value">4,200</div>
//               <div className="stat-desc text-white">↗︎ 400 (22%)</div>
//             </div>

//             <div className="stat">
//               <div className="stat-title text-white">Certified Outlets </div>
//               <div className="stat-value text-white">1,200</div>
//               <div className="stat-desc text-white">↘︎ 90 (14%)</div>
//             </div>
//           </div>

//           <div className="flex max-sm:flex-col md:p-8 max-sm:w-50 gap-4 max-sm:items-center">
//             {/* Create exactly 4 boxes, shuffling between them */}
//             <div >

            
             
        
//                   <div className="carousel rounded-box w-70 max-sm:w-30 md:flex md:flex-row">
//                     <div className="carousel-item w-full">
//                       <img
//                         src="https://www.thespruce.com/thmb/rTwTmEXOLhoRXniZEq_nrJtYioU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stunning-bedroom-4-588feaf43df78caebc597c43.jpg"
//                         className="w-full"
//                         alt="Tailwind CSS Carousel component"
//                       />
//                     </div>
//                     <div className="carousel-item w-full">
//                        <img
//                         src="http://cdn.home-designing.com/wp-content/uploads/2009/06/purple-bedroom.jpg"
//                         className="w-full"
//                         alt="Tailwind CSS Carousel component"
//                       /> 
//                     </div>
//                     <div className="carousel-item w-full">
//                       <img
//                         src="https://i.pinimg.com/originals/34/dd/ba/34ddba19c4a2dbb135ab0c55e79588e5.jpg"
//                         className="w-full"
//                         alt="Tailwind CSS Carousel component"
//                       />
//                     </div>
//                     <div className="carousel-item w-full">
//                       <img
//                         src="http://www.thewowdecor.com/wp-content/uploads/2015/07/cozy-master-bedrooms-idea.jpg"
//                         className="w-full"
//                         alt="Tailwind CSS Carousel component"
//                       />
//                     </div>
//                   </div>


//                   <div className="carousel rounded-box w-70 max-sm:w-30 md:flex md:flex-row">
                       

//                   <div className="carousel-item w-full">
//                 <img
//                   src="https://thumbs.dreamstime.com/b/vertical-frame-lit-bedroom-wood-flooring-single-bed-vertical-frame-lit-bedroom-wood-flooring-single-bed-168702554.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://c8.alamy.com/comp/2G5PJGB/bedroom-interior-with-yellow-unfolded-vertical-mount-murphy-wall-bed-pull-out-bed-stored-into-working-place-with-table-armchair-shelves-and-computer-2G5PJGB.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://thumbs.dreamstime.com/z/vertical-view-classy-bedroom-interior-colorful-bedding-round-pillows-140889043.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>



//                   </div>

//                   <div className="carousel rounded-box w-70 max-sm:w-30 md:flex md:flex-row">
                    
//                   <div className="carousel-item w-full">
//                 <img
//                   src="https://tse2.mm.bing.net/th?id=OIP.tsT7oqcEtmPjGNY-KWGPywHaKn&pid=Api&P=0&h=180"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://tse3.mm.bing.net/th?id=OIP._VODIucRPZIS7nMHf1CKOQHaJQ&pid=Api&P=0&h=180"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//               <div className="carousel-item w-full">
//                 <img
//                   src="https://c8.alamy.com/comp/2G5PJ5P/bedroom-interior-with-yellow-folded-vertical-mount-murphy-wall-bed-pull-out-bed-stored-into-working-place-with-table-armchair-shelves-and-computer-2G5PJ5P.jpg"
//                   className="w-full"
//                   alt="Tailwind CSS Carousel component"
//                 />
//               </div>
//                   </div>

              




               
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;








import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import * as motion from "motion/react-client"



// Initial order of images
const initialOrder = [
  "https://www.thespruce.com/thmb/rTwTmEXOLhoRXniZEq_nrJtYioU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stunning-bedroom-4-588feaf43df78caebc597c43.jpg",
  "http://cdn.home-designing.com/wp-content/uploads/2009/06/purple-bedroom.jpg",
  "https://i.pinimg.com/originals/34/dd/ba/34ddba19c4a2dbb135ab0c55e79588e5.jpg",
  "http://www.thewowdecor.com/wp-content/uploads/2015/07/cozy-master-bedrooms-idea.jpg",
];


 const box = {
   width: "auto",
   height: "auto", 
   borderRadius: 4, 
 }


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Hero() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(shuffle([...order])); // Shuffle images
    }, 2000);

    return () => clearInterval(interval);
  }, [order]);

  return (
    <div>
      <div className="hero bg-teal-800 hidden lg:block">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex px-20  gap-4 ml-20">
            <div className="carousel rounded-box w-70">
              {order.map((image, index) => (
                <div key={index} className="carousel-item w-full">
                  <img src={image} className="w-full" alt="Bedroom Design" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-teal-700 skeleton rounded-2xl text-white w-65 h-8 justify-center items-center px-6 py-1 font-sans font-normal antialiased">
              FURNITURE DESIGNS IDEAS
            </p>
            <h1 className="text-5xl font-medium py-2 text-white">
              Modern Interior{" "}
            </h1>
            <h1 className="text-5xl font-medium text-white">Design Studio </h1>
            <p className="py-6 w-96 text-blue-100">
              Choosing the right furniture for your home online will add elegance
              and functionality to your interior while also being cost effective
              and long lasting.
            </p>
            <div>

              <motion.button  whileHover={{ scale: 1.2}}
                whileTap={{scale: 0.8}}
                style={box}
              >

              <button className="btn bg-yellow-600 rounded-full p-6 w-40 skeleton">
                Shop Now <FaLongArrowAltRight />{" "}
              </button>
              <button className="underline offset-4 px-4 text-blue-100">
                Follow Instagram{" "}
              </button>
              </motion.button>
              
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-10 text-white">
              <div className="stat text-white">
                <div className="stat-title text-white">Unique Styles </div>
                <div className="stat-value">31K</div>
                <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-title text-white">Happy Customers </div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc text-white">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title text-white">Certified Outlets </div>
                <div className="stat-value text-white">1,200</div>
                <div className="stat-desc text-white">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:justify-center block lg:hidden ">
        <div className="bg-teal-800 max-sm:p-12 md:p-12 md:w-full">
          <p className="bg-teal-700 skeleton rounded-2xl md:ml-40 text-white w-65 h-8 justify-center items-center px-6 py-1 font-sans font-normal antialiased ">
            FURNITURE DESIGNS IDEAS
          </p>
          <h1 className="text-3xl font-medium py-2 md:ml-28 max-sm:w-60 max-sm:ml-4 text-white ">
            Modern Interior Design Studio
          </h1>
          <h1 className="text-5xl font-medium text-white max-sm:hidden md:ml-30 ">
            Design Studio{" "}
          </h1>
          <p className="py-6 w-96 text-blue-100 max-sm:w-70 max-sm:px-6 md:ml-30">
            Choosing the right furniture for your home online will add elegance
            and functionality to your interior while also being cost effective
            and long lasting.
          </p>
          <div className="max-sm:w-60 md:ml-30 ">
          <motion.button  whileHover={{ scale: 1.2}}
                whileTap={{scale: 0.8}}
                style={box}
              >
            <button className="btn bg-yellow-600 rounded-full p-6 w-40 max-sm:ml-2 skeleton">
              Shop Now <FaLongArrowAltRight />{" "}
            </button>
            <button className="underline offset-4 px-4 max-sm:p-4 max-sm:ml-2 text-blue-100">
              Follow Instagram{" "}
            </button>
          </motion.button>
          
          
          </div>

          <div className="stats stats-vertical lg:stats-horizontal shadow mt-10 text-white max-sm:hidden md:hidden ">
            <div className="stat text-white ">
              <div className="stat-title text-white">Unique Styles </div>
              <div className="stat-value">31K</div>
              <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Happy Customers </div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc text-white">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Certified Outlets </div>
              <div className="stat-value text-white">1,200</div>
              <div className="stat-desc text-white">↘︎ 90 (14%)</div>
            </div>
          </div>

          <div className="flex max-sm:flex-col md:p-8 md:ml-30  max-sm:w-60  gap-4 max-sm:items-center">
            <div>
              <div className="carousel rounded-box w-70 max-sm:w-30 md:flex md:flex-row max-md:justify-center max-md:items-center">
                {order.map((image, index) => (
                  <div key={index} className="carousel-item w-full">
                    <img src={image} className="w-full" alt="Bedroom Design" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
