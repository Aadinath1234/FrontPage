import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

function Products() {
  return (
    <div>
      <div className="flex max-sm:flex-col gap-20 p-20   w-full items-center ">
        <p className="font-mono font-semibold font-lg text-4xl max-sm:w-70 md:w-40 md:px-2 ">
          Trending Products for you !
        </p>
        <button class="rounded-2xl bg-yellow-600 w-40  h-8 items-center ml-60 max-sm:ml-4   ">
          View All Products
        </button>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-border px-20 ">
          <a role="tab" className="tab font-sans font-semibold ">
            Bed Room
          </a>
          <a role="tab" className="tab tab-active font-sans font-semibold ">
            Living Room
          </a>
          <a role="tab" className="tab font-sans font-semibold ">
            Dining Room
          </a>
          <a role="tab" className="tab font-sans font-semibold ">
            Outdoor
          </a>
          <a role="tab" className="tab font-sans font-semibold ">
            Indoor
          </a>
        </div>
      </div>

      {/* cards  */}

      <div className="flex flex-row max-lg:flex-col  max-sm:flex-col justify-center items-center p-8 gap-4 ">
        {/* card1  */}
        <div className="card border-2 border-black rounded-3xl max-sm:w-80  w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="https://pluspng.com/img-png/png-table-and-chairs-solid-wood-dining-room-furniture-image-41447-600.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Luxe Lounge Sofa </p>
              <p>$235.99</p>
            </div>
            <div className="bg-blue-200 skeleton rounded-2xl text-black text-2xl p-4 ml-40 max-sm:ml-30 ">
            <FaCartShopping />
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="card border-2 border-black rounded-3xl max-sm:w-80  w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="https://pngimg.com/uploads/chair/chair_PNG6908.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Comfort  Sofa </p>
              <p>$250</p>
            </div>
            <div className="bg-blue-100 skeleton rounded-2xl text-black text-2xl p-4 ml-48 max-sm:ml-30">
            <FaCartShopping />
            </div>
          </div>
        </div>

        {/* card 3  */}
        <div className="card border-2 border-black rounded-3xl max-sm:w-80  w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="https://freepngimg.com/thumb/aquarium/46026-1-lounge-chair-free-download-png-hd.png"
                alt="Shoes"
                className="rounded-xl "
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Luxury b Sofa </p>
              <p>$180.99</p>
            </div>
            <div className="bg-blue-100 skeleton rounded-2xl text-black text-2xl p-4 ml-48 max-sm:ml-30">
            <FaCartShopping />
            </div>
          </div>
        </div>
        </div>

      {/* card 4 */}
      <div className="flex flex-row max-lg:flex-col  max-sm:flex-col  justify-center items-center p-8 gap-4 ">
      <div className="card  border-2 border-black rounded-3xl max-sm:w-80 w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="https://www.pngkit.com/png/full/424-4246214_870-ottoman-ottoman.png"
                alt="Shoes"
                className="rounded-xl h-72"
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Teal ottoman  </p>
              <p>$125.99</p>
            </div>
            <div className="bg-blue-100 skeleton rounded-2xl text-black text-2xl p-4 ml-48 max-sm:ml-30">
            <FaCartShopping />
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className="card border-2 border-black rounded-3xl max-sm:w-80  w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="https://pngimg.com/uploads/pillow/pillow_PNG14213.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Western Pillow  </p>
              <p>$99</p>
            </div>
            <div className="bg-blue-100 skeleton rounded-2xl text-black text-2xl p-4 ml-48 max-sm:ml-30">
            <FaCartShopping />
            </div>
          </div>
        </div>

        {/* card 6 */}
        <div className="card border-2 border-black rounded-3xl max-sm:w-80  w-96 shadow-sm bg-orange-100">
          <div className="flex gap-20 p-4 ">
            <p className="bg-teal-600 rounded-full w-12 p-2 ">20% </p>
            <p className="text-4xl px-40 ml-8 max-sm:px-18">
              <CiHeart />
            </p>
          </div>
          <div>
            <figure className="p-12">
              <img
                src="http://clipart-library.com/images_k/couch-transparent-background/couch-transparent-background-5.png"
                alt="Shoes"
                className="rounded-xl h-72"
              />
            </figure>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-2xl font-sans flex  ">
            <div>
              <p>Bed sofa set  </p>
              <p>$999.99</p>
            </div>
            <div className="bg-blue-100 skeleton rounded-2xl text-black text-2xl p-4 ml-48 max-sm:ml-30">
            <FaCartShopping />
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Products;
