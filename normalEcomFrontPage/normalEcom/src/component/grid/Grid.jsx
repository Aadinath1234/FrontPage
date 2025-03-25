import React from "react";

function Grid() {
  return (
    <div className="p-8">
      {/* Grid container */}
      <div className="grid grid-cols-1 max-sm:flex max-sm:flex-col sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Top row (two boxes side by side) */}
         <div className="card bg-base-100 image-full w-full shadow-xl">
          <figure>
            <img
              src="https://media.istockphoto.com/id/902268726/photo/beautiful-blonde-woman-christmas-lights.jpg?s=1024x1024&w=is&k=20&c=6wqPYk6npK3o3biBmayW00rlXiGvP1xByRhcCUoEp0c="
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-baseline mt-28">
            <h2 className="card-title font-sans text-xl text-white">FOR MEN ONLINE </h2>
            <p className=" font-sans text-3xl text-white">MEN'S SUNGLASSES </p>
            
          </div>
        </div> 

         <div className="card bg-yellow image-full w-full shadow-xl ">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1002724368/photo/portrait-of-beautiful-young-woman.jpg?s=1024x1024&w=is&k=20&c=tcs6-KnFQ6Ys6VCXcUBqdoLQK5GEniAGX3Mdi7hEQow="
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-baseline mt-28">
            <h2 className="card-title font-sans text-xl text-white ">MEN'S SNEAKER</h2>
            <p className="font-sans text-3xl text-white">MEN'S SNEAKER </p>
            
          </div>
        </div> 

        



  {/* right bottom box  */}
  <div class="col-span-2 max-sm:w-70  bg-red-500 order-3 grow-7   ">
           <div className="card bg-black image-full w-full  ">
           <figure>
             <img
                src="https://media.istockphoto.com/id/599271754/photo/portrait-of-a-beautiful-woman.jpg?s=1024x1024&w=is&k=20&c=45XtWB3KDYUGk8b9F144mXfjgIy5jMBHmOrBD9PDXa4="
                 alt="Shoes"
               />
             </figure>
             <div className="card-body justify-end items-baseline ">      
              <h2 className="card-title font-sans text-xl text-white">MEN'S SHOES </h2>
             <p className="font-sans text-3xl text-white">COLLECTION </p>
               
             </div>
           </div>
         </div>




         <div className="row-span-2 max-lg:hidden  bg-black order-2 ml-5 max-lg:ml-2 grow-8 max-lg:row-span-2 max-md:h-1/2 ">
         <div className="card bg-base-100 image-full w-auto h-full max-lg:">
   <figure>
     <img
       src="https://media.istockphoto.com/id/1654511006/photo/portrait-of-a-girl-model.jpg?s=1024x1024&w=is&k=20&c=AIBXYv1pXKlKasxcYNlF23FkeGdl6dbWo3h43DwMjO4="
       alt="Shoes" />
   </figure>
   <div className=" card-body justify-end items-baseline ">
     <h2 className="card-title font-sans text-xl text-white">COLLECTION OF 2019 ! </h2>
     <p className="font-sans text-3xl text-white">MEN'S T-SHIRT </p>
     
   </div>
 </div>
 </div>
 </div>
 </div>
       



      
    
  );
}

export default Grid;










