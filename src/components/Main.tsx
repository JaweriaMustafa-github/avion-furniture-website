import React from "react";
import Image from "next/image";

const Main: React.FC = () => {
  return (
    <div className="bg-white mt-32">
      {/* Section Heading */}
      <h3 className="text-2xl font-sans text-[#2A254B] text-center mb-10 px-4 mt-4">
        What makes our brand different
      </h3>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        <span className='h-[40Hug] w-[270Hug] '>
          <Image 
             src="/icons/Delivery.png" 
             alt="Delivery" 
             width={24} 
             height={24} 
             className="w-auto h-full text-[#2A254B] bg-white"/>
        </span>             
          <h4 className="text-lg font-medium pt-3 text-[#2A254B] bg-white">Next day as standard</h4>
          <p className="text-base font-normal text-[#2A254B] bg-white">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        <span className='h-[40Hug] w-[270Hug] '>
          <Image 
          src="/icons/Checkmark--outline.png" 
          alt="Delivery" 
          width={24} 
          height={24} 
          className="w-auto h-full text-[#2A254B] bg-white"/>
        </span> 
          <h4 className="text-lg font-medium pt-3 text-[#2A254B] bg-white">Made by true artisans</h4>
          <p className="text-base font-normal  text-[#2A254B] bg-white">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        <span className='h-[40Hug] w-[270Hug] '>
          <Image 
          src="/icons/Purchase.png" 
          alt="Delivery" 
          width={24} 
          height={24} 
          className="w-auto h-full text-[#2A254B] bg-white"/>
        </span> 
          <h4 className="text-lg font-medium pt-3 text-[#2A254B] bg-white">Unbeatable prices</h4>
          <p className="text-base font-normal text-[#2A254B] bg-white">
            For our materials and quality, you won&apos;t find better prices
            anywhere.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
        <span className='h-[40Hug] w-[270Hug] '>
          <Image 
          src="/icons/Sprout.png" 
          alt="Delivery" 
          width={24} 
          height={24} 
          className="w-auto h-full text-[#2A254B] bg-white"/>
        </span>
          <h4 className="text-lg font-medium pt-3 text-[#2A254B] bg-white">Recycled packaging</h4>
          <p className="text-base font-normal text-[#2A254B] bg-white">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;