import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";

function Cards() {
  return (
  <div className="flex justify-between items center max-sm:flex-col ">
    <div className="divider"></div>
      <div className="card  text-black  w-96 max-sm:px-14">
        <div className="card-body">
          <div className="px-14">
            <img
              src="src\assets\money.png"
              alt="money"
              className="w-20 h-20 justify-center items-center "
            />
          </div>

          <h2 className="card-title ">100% Payment Secure</h2>
          <p>Simply return it within 30 days for an exchange</p>
        </div>
      </div>
      {/* <p className='bg-black border-1 '>|</p> */}

      <div className="flex w-5">
        <div className="divider divider-horizontal divider-end"></div>
      </div>

      <div className="card text-black w-96">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <img
              src="src\assets\shiping.png"
              alt="shiping"
              className="w-20 h-20 justify-center items-center "
            />
          </div>
          <h2 className="card-title flex justify-center items-center">
            FREE SHIPPING
          </h2>
          <p className="flex justify-center items-center px-8">
            Free shipping on all US orders or order above $200
          </p>
        </div>
      </div>

      <div className="flex w-5">
        <div className="divider divider-horizontal divider-end"></div>
      </div>

      <div className="card  text-black w-96">
        <div className="card-body">
          <div className="flex justify-center items-center">
            <img
              src="src\assets\gift.png"
              alt="gift"
              className="w-20 h-20 justify-center items-center "
            />
          </div>
          <h2 className="card-title flex justify-center items-center">
            30 Days Return
          </h2>
          <p className="flex justify-center items-center px-8">
            Simply return it within 30 days for an exchange{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
