import React from "react";
import * as motion from 'motion/react-client'

const box = {
  width: "auto",
  height: "auto",
  
  borderRadius: 5,
}

function Clients() {
  return (
    <div>
      <div className="p-20 max-sm:flex-col max-md:p-4 max-md:w-80   skeleton">
        <p className="font-sans font-semibold text-3xl skeleton max-sm:w-60">
          Don't take our word,
        </p>
        <p className="font-sans font-semibold text-3xl skeleton">
          see what our clients say
        </p>
      </div>

      <div className="flex max-sm:flex-col max-lg:flex-col justify-center items-center gap-4">
        <div className="w-full">
          <div className="card   shadow-sm border-2 border-black  bg-teal-600 flex rounded-2xl skeleton">
            <figure className="flex max-sm:flex-col  p-8 gap-4">
              <img
                src="https://png.pngtree.com/png-clipart/20231028/original/pngtree-interest-beautiful-girl-transparent-background-png-image_13446285.png"
                alt="image"
                className="w-1/2 p-8 border-4 border-black rounded-2xl skeleton bg-teal-400"
              />
              <div className="max-sm:w-80">
                <p className="font-serif font-normal text-blue-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  molestias excepturi maxime, accusantium quos exercitationem
                  eos odit voluptate aperiam, perferendis qui porro. Optio nemo,
                  repudiandae corporis odio nobis expedita cupiditate dolore sed
                  fuga commodi nostrum, saepe sequi eum nisi rem!
                </p>
                <p className="p-2 font-serif font-bold text-blue-200">
                  Nikola Tesla{" "}
                </p>
                <p className="font-serif font-normal text-blue-200">
                  - Vietnam
                </p>
              </div>
            </figure>
          </div>
        </div>
        <div className=" p-2">
            <motion.div
            
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
          }}
          style={box}

            
            >
            <div className="card  w-96 max-sm:w-80 shadow-sm border-2 border-black rounded-2xl bg-orange-100 skeleton ">
            <figure >
              <img
                src="https://www.pngarts.com/files/3/Female-Face-Transparent-Images.png"
                alt="photo2 " 
              />
            </figure>
          </div>

            </motion.div>
          


        </div>
      </div>
    </div>
  );
}

export default Clients;
