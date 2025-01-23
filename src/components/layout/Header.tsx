import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
           {/* Search Input with Icon */} 
           <div className="relative cursor-pointer"> 
        <Image src="/icons/Search.png" alt="Search icon" height={24} width={24} className="w-auto h-auto" /> 
        </div> 
       

        {/* Logo in the Center */}
        <h1 className="text-2xl w-[65px] h-[30px] font-serif text-[#22202E]">Avion</h1>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4">

          {/* Add to Cart Icon */} 
       <div className="hidden md:block"> 
        <a href="/cart" className="text-gray-700"> <Image src="/icons/Cart.png" alt="Cart" height={24} width={24} className="w-auto h-auto" /> </a> 
        </div> {/* User Icon */} <div className="hidden md:block"> 
        <a href="/user" className="text-gray-700"> <Image src="/icons/User.png" alt="User" height={24} width={24} className="w-auto h-auto" /> </a> 
        </div> 

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-white border-t hidden md:flex space-x-6">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-6">
        <a href="/" className="text-gray-700 hover:underline">
          Plant pots
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Ceramics
          </a> 
          <a href="/" className="text-gray-700 hover:underline">
          Tables
          </a> 
          <a href="/" className="text-gray-700 hover:underline">
          Chairs
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Crockery
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Tableware
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Cutlery
          </a>
        </div>
      </nav>

        {/* For Mobile Screens */}
        <Sheet>
          <SheetTrigger className='md:hidden'>
            <Menu/>
          </SheetTrigger>
          <SheetContent>
          <nav className="flex flex-col gap-4 list-none">
          <a href="/" className="text-gray-700 hover:underline">
          Plant pots
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Ceramics
          </a> 
          <a href="/" className="text-gray-700 hover:underline">
          Tables
          </a> 
          <a href="/" className="text-gray-700 hover:underline">
          Chairs
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Crockery
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Tableware
          </a>
          <a href="/" className="text-gray-700 hover:underline">
          Cutlery
          </a>
        </nav>
          </SheetContent>
        </Sheet>

    </header>
  );
};

export default Header;