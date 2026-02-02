import React from "react";
import pizza from "../assets/pizza.png";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-10 lg:px-20 py-12">
      <div className="w-full md:w-5/12 flex flex-col justify-center md:items-start items-center text-center md:text-left space-y-4">
        <h1 className="font-extrabold font-serif text-2xl sm:text-3xl lg:text-5xl text-amber-500">
          PizzaHub:
        </h1>
        <p className="font-semibold text-lg sm:text-xl lg:text-2xl">
          Your strategic partner in crafting memorable dining experiences for clients and teams..
        </p>
        <p className="text-base sm:text-lg lg:text-xl">Fuel your business with our premium pizzas</p>
        <button className="mt-5 cursor-pointer  hover:bg-orange-400 bg-amber-950 border border-white text-white rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg">
          Order Now
        </button>
      </div>

      <div className="w-full md:w-7/12 flex justify-center items-center">
        <img src={pizza} className="h-96" />
      </div>
    </div>
  );
}

export default Hero;
