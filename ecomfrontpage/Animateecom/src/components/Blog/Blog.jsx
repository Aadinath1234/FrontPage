import React from "react";
import * as motion from "motion/react-client";

const box = {
  width: "auto",
  height: "auto",

  borderRadius: 5,
};

function Blog() {
  return (
    <div>
      <div className="p-20 max-sm:p-10">
        <p className="font-sans font-semibold text-3xl skeleton w-1/3 max-sm:w-70 ">
          Explore Our Latest Blog
        </p>
      </div>

      <div className="flex max-sm:flex-col max-lg:flex-col sm:justify-center sm:items-center px-12 max-sm:px-4 gap-8">
        {/* card 1 */}

        <motion.div
          style={box}
          whileTap={{ scale: 0.8 }}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <div className="card bg-base-100 border-2 border-black rounded-xl max-sm:w-80  w-96 shadow-sm skeleton ">
            <figure className="skeleton">
              <img
                src="https://secure.img1.wfcdn.com/lf/maxsquare/hash/4720/7758517/1/.jpg"
                alt="Shoes"
                className="rounded-3xl   p-4  "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title skeleton">
                First Time Home Owner Ideas{" "}
              </h2>
              <p className="font-serif font-semibold skeleton">
                by Krishtin Watson on Apr 19, 24
              </p>
            </div>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          style={box}
          whileTap={{ scale: 0.8 }}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <div className="card border-2 border-black rounded-xl bg-base-100 max-sm:w-80 w-96 shadow-sm">
            <figure className="skeleton">
              <img
                src="https://images.furnituredealer.net/img/products/smith_brothers/color/393_393-12-b1.jpg"
                alt="Shoes"
                className="rounded-3xl p-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title skeleton">
                How To Keep Our Furniture Clean{" "}
              </h2>
              <p className="font-serif font-semibold skeleton">by Robert Fox</p>
            </div>
          </div>
        </motion.div>

        {/* card 3 */}

        <motion.div
          style={box}
          whileTap={{ scale: 0.8 }}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <div className="card border-2 border-black rounded-xl bg-base-100 max-sm:w-80 w-96 shadow-sm">
            <figure className="skeleton">
              <img
                src="https://woodc.pk/wp-content/uploads/2023/06/jjnvcfvb.jpeg"
                alt="Shoes"
                className="rounded-3xl p-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title skeleton">
                Small Space Furniture Apartment Ideas{" "}
              </h2>
              <p className="font-serif font-semibold skeleton">
                by Scroller of latin America
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
