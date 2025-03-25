import React from "react";
import * as motion from 'motion/react-client'


const ball = {
  width: "auto",
  height: "auto",
 
  borderRadius: "50%",
}



function Offers() {
  return (
    <div className="px-50 max-sm:p-4 bg-base-100" >
      <div className="flex  max-sm:flex-col max-lg:flex-col md:gap-4  w-full   ">
        <div className="card rounded-box  grid grow place-items-center ">
          
          
          
          <motion.div initial={{opacity: 0, scale: 0}}
             animate={{ opacity: 1, scale: 1}}
             transition={{
              duration:0.4,
              scale:{type: "spring", visualDuration:0.4 , bounce:0.5},
             }} style={ball}
          >

          <div className="card bg-base-100 image-full max-sm:p-4 w-96 max-sm:w-80 shadow-sm ">
            <figure>
              <img
                src="https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-chair-and-table-japandi-style-png-image_11456767.png"
                alt="Shoes" className="skeleton"
              />
            </figure>
            <div className="card-body">
              <div className="flex px-14 ">
                <p className="font-sans font-normal">Exclusive Offer </p>
                <p className="bg-amber-50 rounded-2xl w-8  text-orange-700 font-semibold ">15% OFF</p>
              </div>

              <div className="p-4 ">
                <p className="font-sans font-semibold text-3xl text-white w-5/6 p-4 ">
                    Best Online Deals, Free Stuff  
                </p>
                <p className="font-sans font-normal text-medium p-2  ">Only on this week... Don't Miss</p>
                <button className="bg-yellow-600 w-40 p-2 rounded-2xl text-white mt-4  ">Get Best Deal  </button>
              </div>



            </div>
          </div>

          </motion.div>
          





          
        </div>

        {/* card 2 */}
        <div >
        <motion.div initial={{opacity: 0, scale: 0}}
             animate={{ opacity: 1, scale: 1}}
             transition={{
              duration:0.4,
              scale:{type: "spring", visualDuration:0.4 , bounce:0.5},
             }} style={ball}
          >
        <div className="card  rounded-box grid grow place-items-center   ">
          <div className="card border-2 border-black rounded-xl card-border bg-base-100 w-96 max-sm:w-80">
          <div className="card-body skeleton">
              <div className="flex px-14 ">
                <p className="font-sans font-semibold text-lg skeleton">Regular  Offer </p>
               
              </div>

              <div className="p-4 ">
                <p className="font-sans font-semibold text-3xl text-black w-5/6 p-2 skeleton">
                   10% cash-back on personal care  
                </p>
                <p className="font-sans font-normal text-medium p-2 skeleton ">Max cashback: $12. Code:CADHL837</p>
                <button className="bg-teal-800 w-40 p-2 rounded-2xl text-white mt-4 skeleton ">Shop Now   </button>
              </div>



            </div>
          </div>
        </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
