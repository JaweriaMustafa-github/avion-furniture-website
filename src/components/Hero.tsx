import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-neutral-100 w-full h-[704px] flex items-center justify-center px-4 md:px-8">
      <div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-20 md:bg-opacity-0"></div>

      {/* Content */}
      <div className="relative bg-white p-6 shadow-lg w-full max-w-md md:max-w-lg lg:w-[630px] lg:h-[444px] lg:ml-[500px]">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#22202E] mb-4">
          Luxury homeware for people who love timeless design quality
        </h2>
        <p className="text-sm md:text-base text-[#5B5676] mb-6 hidden">
          Shop the new Spring 2022 collection today
        </p>
        <p className="text-sm md:text-base text-[#5B5676] mb-6">With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
        <Link href="/productlist">
        <Button variant="secondary"
        className="w-full md:w-auto h-[56Hug] gap-y-[10px] text-sm md:text-base px-6 py-3 text-[#2A254B] mt-4 md:mt-44 hover:bg-neutral-300">
        View Collection</Button>
        </Link>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;