import React from "react";
const Hero = () => {
  return (
    <section className="py-16 bg-hero bg-cover bg-fixed min-h-screen">
      {/* text */}
      <div className="w-3/4 px-2 m-auto">
        <div className="flex justify-between">
          <div className="w-3/6	leading-loose">
            <div>
              <h2 className="text-xl uppercase font-semibold text-orange-500">
                welcome to pixelpulse
              </h2>
              <h1 className="text-6xl uppercase font-semibold mt-4 text-white">
                creative digital agency based in sl.{" "}
              </h1>
            </div>
            <p className="mt-5 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <button className="text-white uppercase bg-orange-800 px-3 py-2 border-r-2 rounded-xl mt-4 transition hover:scale-110 hover:bg-white hover:text-orange-600 duration-300 ">
                get started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
