import React from "react";
import { IoReturnDownForward } from "react-icons/io5";

function Cards() {
  return (
    <div className="flex gap-12 p-16 max-sm:flex-col justify-center items-center">
      <div className="grid grid-rows-2 gap-8 ">
        <div className="card card-side border-2 max-sm:flex-col max-sm:h-full max-sm:p-2 border-black rounded-2xl bg-orange-100 shadow-sm flex  items-center h-60 ">
          <div className="card-body  ">
            <ul className="gap-2">
              <li className="font-serif font-nomal  text-lg bg-orange-50 rounded-2xl px-4 w-40 items-center ">
                New Collection
              </li>
              <li className="font-sans font-bold text-lg py-2">Center Table </li>
              <li className="font-sans font-medium text-md ">Square Table </li>
              <li className="font-sans font-medium text-md">Round Table </li>
              <li className="font-sans font-medium text-md ">Wooden Table </li>
              <li className="font-sans font-medium text-md ">Glass Table </li>
            </ul>
            <div className="flex">
              <a className=" flex items-center gap-2 underline offset-4">
                View All <IoReturnDownForward />
              </a>
            </div>
          </div>
          <div>
            <figure>
              <img
                src="http://www.freepngimg.com/download/table/18-table-png-image.png"
                alt="Movie"
                className="w-full max-sm:w-full   h-40"
              />
            </figure>
          </div>
        </div>

        {/* card 2  */}

        <div className="card card-side border-2 max-sm:flex-col max-sm:h-full  border-black rounded-3xl bg-orange-100 shadow-sm flex items-center h-60 ">
          <div className="card-body">
            <ul>
              <li className="font-serif font-nomal  text-lg bg-orange-50 rounded-2xl px-4 w-40 items-center ">
                New Collection
              </li>
              <li className="font-sans font-bold text-lg py-2">Lighting Lamp  </li>
              <li className="font-sans font-medium text-md ">Flore Lamps  </li>
              <li className="font-sans font-medium text-md">Tripod Lamps </li>
              <li className="font-sans font-medium text-md ">Table Lamps  </li>
              <li className="font-sans font-medium text-md ">Study Lamps  </li>
            </ul>
            <div className="flex">
              <a className=" flex items-center gap-2 underline offset-4">
                View All <IoReturnDownForward />
              </a>
            </div>
          </div>

          <div className="flex max-sm:flex-col">
            <figure>
              <img
                src="http://pluspng.com/img-png/png-lamp-lamp-png-image-1950.png"
                alt="Movie"
                className="w-full h-40  "
              />
            </figure>

            <div>
              <img
                src="https://img.freepik.com/premium-vector/get-discount-neon-light-sign_44523-549.jpg"
                alt="discount" className="w-full h-60 rounded-3xl p-4 max-sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* card 3  */}

      <div className="card card-side border-2 border-black rounded-2xl bg-orange-100 shadow-sm">
        <div className="card-body">
          <ul>
            <li className="font-serif font-nomal  text-lg bg-orange-50 rounded-2xl px-4 w-40 items-center  ">New Collection </li>
            <li className="font-sans font-bold text-lg py-2">Accent Chairs   </li>
              <li className="font-sans font-medium text-md ">Arm Chair </li>
              <li className="font-sans font-medium text-md">Wing Chair  </li>
              <li className="font-sans font-medium text-md ">Cafe Chair   </li>
              <li className="font-sans font-medium text-md ">Wheels Chair   </li>
            <p className="flex">
              <a className=" flex items-center gap-2 underline offset-4">
                View All <IoReturnDownForward />
              </a>
            </p>
            <figure>
              <img
                src="http://clipart-library.com/image_gallery2/Chair-High-Quality-PNG.png"
                alt="Movie"
                className="w-full p-8 h-80 "
              />
            </figure>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
