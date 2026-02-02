import React from "react";
import party from "../assets/party.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-10 lg:px-20 py-12">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover" src={party} />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center space-y-4">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl my-2">ABOUT US</h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          At PizzaHub, we pride ourselves on being the go‑to destination for
          pizza lovers and flavor seekers alike. We’re dedicated to serving
          mouth‑watering, hand‑crafted pizzas in a vibrant and inviting
          atmosphere, where guests can indulge in delicious slices, celebrate
          good times, and enjoy every bite in comfort.
        </p>
      </div>
    </div>
  );
}

export default About;
