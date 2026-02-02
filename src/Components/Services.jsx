import React from "react";
import customized from "../assets/customized.png";
import MobilePizza from "../assets/MobilePizza.png";
import events from "../assets/events.png";
import delivery from "../assets/delivery.png";
import ingredients from "../assets/ingredients.png";

function Services() {
  
const services = [
    {
      img: customized,
      alt: "Customized Pizza Packages",
      title: "Customized Pizza Packages",
      desc: "Tailor pizzas for corporate functions, client events, or employee perks.",
    },
    {
      img: MobilePizza,
      alt: "Mobile Pizza Catering",
      title: "Mobile Pizza Catering",
      desc: "Baked on-site, a full pizzeria experience directly to your event.",
    },
    {
      img: events,
      alt: "Flexible Ordering Solutions",
      title: "Flexible Ordering Solutions",
      desc: "Works for both small gatherings and large-scale events.",
    },
    {
      img: delivery,
      alt: "Office Delivery & Setup",
      title: "Office Delivery & Setup",
      desc: "Turbo delivery & arrangement for workplace gatherings.",
    },
    {
      img: ingredients,
      alt: "Quality & Consistency Guarantee",
      title: "Quality & Consistency Guarantee",
      desc: "Premium ingredients & reliable service.",
    },
  ];    

return(
<div className="w-full px-6 sm:px-10 lg:px-20 py-12">
<div className="text-center mb-12 font-bold text-2xl sm:text-3xl lg:text-4xl">
    <h1>WHAT WE OFFER</h1>
</div>
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
  {services.map((services, index)=>(
    <li key={index}>
  <img src={services.img} alt={services.alt} className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-6" />
  <h3 className="font-bold text-lg sm:text-xl mb-3">{services.title}</h3>
  <p className="text-sm sm:text-base leading-relaxed">{services.desc}</p>
</li>
  ))}
</ul>
</div>
)
}

export default Services;
