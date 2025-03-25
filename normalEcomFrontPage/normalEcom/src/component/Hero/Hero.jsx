import React from 'react'

function Hero() {
  return (
    <div>

<div className="hero text-white min-h-screen bg-orange ">
    <div className='divider'></div>
  <div className="hero-content flex-col lg:flex-row-reverse p-8  gap-8  ">
    <img
      src="src\assets\hero4.png"
      className="max-w-sm  w-50  h-full bg-opacity-5 bg-orange ml-10 max-sm:ml-2" />
    <div className='max-sm:w-99'>
      <h1 className="text-7xl font-bold font-sans text-black drop-shadow-lg max-sm:mr-2 ">men's </h1>
      <h1 className="text-7xl font-bold font-sans text-black drop-shadow-lg max-sm:mr-16">collection </h1>
       
      <p className="py-6 font-sans text-black text-lg font-medium max-sm:py-10 max-sm:w-48 text-wrap ">
            From T-Shirt, Jeans, Jackets, Shirts,
             Watches, Bags, Sunglasses. 
      </p>
      <button className="btn btn-primary bg-black">SHOP NOW </button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Hero
