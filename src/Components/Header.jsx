import React, { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Services", to: "#services" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <div className="flex justify-between items-center bg-amber-950 text-white px-4 sm:px-6 lg:px-12 py-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl sm:text-3xl">
          <GiFullPizza />
        </span>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold">PizzaHub</p>
      </div>

      <ul className="hidden md:flex gap-4 lg:gap-8 list-none text-base sm:text-lg lg:text-xl font-semibold">
        {navItems.map((item) => (
          <li
            key={item.to}
            className="hover:bg-amber-500 rounded-xl px-3 py-1 cursor-pointer"
          >
            <HashLink to={item.to}>{item.label}</HashLink>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? "x" : "☰"}
        </button>
      </div>


      {isOpen && (
        <ul className="absolute top-10 right-8 w-44 bg-white text-black rounded-2xl flex flex-col items-center gap-4 py-6 text-lg font-semibold md:hidden">
        {/* <ul className="absolute top-0 left-0 w-44 bg-white text-black flex flex-col items-center gap-4 py-6 text-lg font-semibold md:hidden"> */}
          {navItems.map((item) => (
            <li
              key={item.to}
              className="hover:bg-amber-500 rounded-xl px-3 py-1 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <HashLink to={item.to}>{item.label}</HashLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;