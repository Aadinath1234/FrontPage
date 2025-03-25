import React from "react";
import * as motion from 'motion/react-client'


const ball = {
  width: "auto",
  height: "auto", 
  borderRadius: "50%",
}



function Subscribe() {
  return (
    <div className="p-20 max-sm:p-2 max-lg:p-2">
      <div className="px-50 max-sm:px-2  gap-4 bg-base-100  ">
        {/* card 2 */}



  <div className="flex max-sm:flex-col max-lg:flex-col gap-4 w-full">
          
          
        <motion.div
             style={ball} initial={{opacity: 0, scale: 0.5}} 
             animate={{opacity: 1, scale: 1}} 
             transition={{
               duration: 0.8, 
               delay: 0.5, 
               ease: [0, 0.71, 0.2, 1.01], 
             }}  
            >
          <div className="card  rounded-box grid  grow place-items-center  ">
            <div className="card border-2 border-black rounded-xl card-border bg-base-100 w-96 max-sm:w-80 ">
              <div className="card-body skeleton">
                <div>
                  <p className="font-sans font-semibold text-3xl justify-center items-center ">
                    Subscribe To Our
                  </p>
                  <p className="font-sans font-semibold text-3xl  justify-center items-center ">
                    NewsLetter !
                  </p>
                </div>

                <div className="p-4 ">
                  <p className="font-sans font-semibold text-medium text-black w-5/6 p-2 skeleton">
                    Subscribe to our email newsletter today to receive update on
                    the latest news
                  </p>

                  <button className="bg-teal-800 w-40 p-2 rounded-2xl text-white mt-4 skeleton ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
         </motion.div>









          <div>
          <motion.div
             style={ball} initial={{opacity: 0, scale: 0.5}} 
             animate={{opacity: 1, scale: 1}} 
             transition={{
               duration: 0.8, 
               delay: 0.5, 
               ease: [0, 0.71, 0.2, 1.01], 
             }}  
            >
            <div className="card border-2 border-black rounded-2xl image-full skeleton rounded-box grid grow place-items-center  bg-red-900 w-96 max-sm:w-80 shadow-sm">
              <figure>
                <img
                  src="https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-chair-and-table-japandi-style-png-image_11456767.png"
                  alt="Shoes"
                />
              </figure>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
