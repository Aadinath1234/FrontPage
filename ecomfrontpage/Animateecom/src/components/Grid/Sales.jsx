import React from "react";
import { ImSwitch } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa"

function Sales() {
  return (
    <div>
      <div class="grid grid-flow-col grid-rows-2  max-sm:flex max-sm:flex-col max-sm:px-6 max-lg:flex max-lg:flex-col max-lg:px-12  gap-2 p-20 ">
        {/* column 1  */}
        <div class="row-span-3 border-2 border-black rounded-2xl  bg-orange-100 max-sm:w-78 max-lg:w-full max-sm:h-1/2 w-9/10 h-5/6 ">
          <div className="flex max-sm:flex-col ">
            <div className="gap-2  p-10">
              <p className="font-mono font-semibold font-lg text-4xl skeleton">
                Flash Sale !{" "}
              </p>
              <p className="text-wrap w-80 max-sm:w-40 font-sans font-semibold p-4">
                Act fast to grab incredible deals on select furniture pieces in
                our limited-time flash sale{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8">
              <div className="flex px-8 gap-1">
                <p className="text-xl">
                  <ImSwitch />
                </p>
                <p className="font-sans font-semibold">End Time </p>
                
              </div>
              <div className="px-8 ">
                  <p className="font-sans font-semibold gap-2">12H  36M  57S </p>
                </div>
            </div>
          </div>

          <div className="flex max-sm:flex-col   px-10 max-sm:px-8 ">
            <div className="flex flex-col md:flex-col px-10 max-sm:p-8 ">
              <img
                src="https://i.pinimg.com/originals/f1/69/67/f1696782554a703c943a319252d5bb10.png"
                alt="sales sofa"
                className="w-60 h-60 "
              />
              <div className="flex p-4  ">
                <p className="text-3xl font-bold px-4  skeleton">$599</p>
                <p className="text-xl font-normal text-blue-300 px-4 line-through skeleton">$799</p>
              </div>
            </div>

            <div className="gap-4 px-10 py-8 max-sm:p-8">
              <p className="font-sans font-semibold text-2xl">Vintage Leather Armchai </p>
              <p className="font-sans font-semibold w-76 max-sm:w-40 gap-4 p-2">Bring a touch of retro charm to your home
                with this vintage leather armchair . Study 
                construction ensures durability 
              </p>
              <button className="bg-yellow-600 rounded-2xl w-40"> Shop Now </button>
            </div>
          </div>
        </div>

        {/* column 2  */}
        <div class="  border-black rounded-2xl bg-orange-100 h-5/6">
             <div>
                 <img src="http://www.freepngimg.com/download/table/18-table-png-image.png"
                  alt="box 2" 
                  className="w-3/4 p-8 h-1/2" />
             </div>
             <div className="flex gap-40 p-6 max-sm:gap-10">
                <p className="font-sans font-semibold">Rustic Coffee table </p>
                <button className="bg-amber-400 rounded-2xl w-10"><FaLongArrowAltRight /></button>
             </div>

        </div>

        {/* column 3  */}
        <div class="col-span-1 border-2 border-black rounded-2xl bg-orange-100 ">
             <div>
                 <img src="https://www.pikpng.com/pngl/b/107-1071310_book-shelf-png-bibliothque-moderne-design-clipart.png"
                  alt="box 3" 
                  className="w-3/4 p-8 h-1/2" />
             </div>
             <div className="flex gap-40 p-4 max-sm:gap-10">
                <p className="font-sans font-semibold">Modern BookShelf  </p>
                <button className="bg-amber-400 rounded-2xl w-10"><FaLongArrowAltRight /></button>
             </div>

        </div>


        
      </div>
    </div>
  );
}

export default Sales;
