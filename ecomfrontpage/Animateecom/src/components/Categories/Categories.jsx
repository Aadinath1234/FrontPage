import React from "react";

function Categories() {
  return (
    <div className="bg-base-100  ">
      <div className="flex p-8">
        <p className="font-mono font-semibold font-lg text-4xl "> Featured Categories </p>
      </div>

      <div >
        <div className="carousel w-full md:w-full md:h-96 md:px-12  ">
          <div id="item1" className="carousel-item w-full max-sm:items-center ">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/7/PH/LI/SI/54766022/round-center-table-with-chair-1000x1000.jpg"
              className="w-7/10 px-60 ml-40  sm:w-2/3 max-sm:hidden md:px-2 "
            />
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/7/PH/LI/SI/54766022/round-center-table-with-chair-1000x1000.jpg"
              className="sm:hidden max-sm:p-2  "
            />

          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71YEhdxC1NL._SL1500_.jpg"
              className="w-7/10 px-60 ml-40 max-sm:hidden md:px-2"
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71YEhdxC1NL._SL1500_.jpg"
              className="sm:hidden max-sm:p-2"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="http://www.pngall.com/wp-content/uploads/2016/04/Lamp-Free-Download-PNG.png"
              className="w-7/10 px-60 ml-40 max-sm:hidden md:px-2"
            />
            <img
              src="http://www.pngall.com/wp-content/uploads/2016/04/Lamp-Free-Download-PNG.png"
              className=" sm:hidden max-sm:p-2"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://www.pngarts.com/files/3/Hanging-Lamp-PNG-Transparent-Image.png"
              className="w-7/10 px-60 ml-40 max-sm:hidden md:px-2"
            />
              <img
              src="https://www.pngarts.com/files/3/Hanging-Lamp-PNG-Transparent-Image.png"
              className="sm:hidden max-sm:p-2"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;





