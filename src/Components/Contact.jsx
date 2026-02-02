import React from "react";

function Contact() {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-2xl mb-32">CONTACT US</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 space-y-3 text-lg">
          <p>📍 9-8-7/6, ABC Street, XYZ Colony, India</p>
          <p>📧 info@pizzahub.com</p>
          <p>📞 (123) 456 -7890</p>
          <p>🕑 Monday-Friday: 9:00 AM - 7:00 PM</p>
          <p>🕑 Saturday & Sunday: 10:00 AM - 3:00 PM</p>
        </div>
        <form className="md:w-1/2 flex flex-col space-y-4">
          <input
            className="border border-amber-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="border border-amber-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            placeholder="Your Email"
            required
          />
          <input
            className="border border-amber-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="number"
            placeholder="Your Number"
            required
          />
          <textarea
            className="border border-amber-800 rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your Message"
            required
          />

          <button className="bg-amber-800 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-md w-auto self-center cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
// <div>
//   <div>
//     <h1 className='text-center font-bold text-2xl mb-14'>CONTACT US</h1>
//   </div>
//   <div className='flex justify-between w-full'>
//    <div className='w-1/2'>
//       <p>123 Avenue</p>
//       <p>info@pizzahub.com</p>
//       <p>(123) 456 -7890</p>
//       <p>Monday-Friday: 9:00 AM - 7:00 PM</p>
//       <p>Saturday & Sunday: 10:00 AM - 3:00 PM</p>
//     </div>
//   <form className='w-1/2 flex flex-col'>
//     <input className='pl-1.5 mt-3 border border-black' type='text' placeholder='Your Name'/>
//     <input className='pl-1.5 mt-3 border border-black' type='text' placeholder='Your Email'/>
//     <input className='pl-1.5 mt-3 border border-black pb-5' type='text' placeholder='Your Message'/>
//     <button className='my-5 cursor-pointer bg-amber-800 hover:bg-orange-500 text-white rounded-xl'>Submit</button>
//   </form>
//   </div>
// </div>
