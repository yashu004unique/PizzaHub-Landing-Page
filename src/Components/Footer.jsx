import React from "react";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";

function Footer() {
  return (
  <footer className="bg-gray-700 text-white px-6 sm:px-10 lg:px-20 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div className="text-sm sm:text-base font-semibold">&copy; 2025 Pizza Hub</div>
      <div className="flex gap-4 text-2xl sm:text-3xl">
        <span className="cursor-pointer hover:text-orange-300">
          <LiaFacebook />
        </span>
        <span className="cursor-pointer hover:text-orange-300">
          <FaInstagram />
        </span>
        <span className="cursor-pointer hover:text-orange-300">
          <TbBrandWhatsapp />
        </span>
      </div>
      <div className="flex gap-2 text-sm sm:text-base font-medium">
        <span className="cursor-pointer hover:text-orange-300">
          Privacy Policy
        </span>
        <span>. </span>
        <span className="cursor-pointer hover:text-orange-300">
          Refund Policy
        </span>
      </div>
    </div>        
  </footer>
  );
}

export default Footer;
