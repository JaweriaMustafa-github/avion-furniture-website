import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-8 bg-[#2A254B] mt-8">
        <div className="flex flex-wrap gap-12 md:gap-8 lg:gap-20">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl">Menu</h1>
            <div>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl">Categories</h1>
            <div>
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl">Our Company</h1>
            <div>
              <h1><Link href="/about">About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/contact'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className="mt-4">
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full md:w-[250px] h-[56px] p-2 bg-transparent opacity-35 border border-white rounded-md"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className="bg-[#4E4D93] my-8" />

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-white gap-4">
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className="flex gap-4 bg-[#2A254B]">
            <Link href={'/'}><Image src="/icons/Logo--Linkedin.png" alt="Linkedin" height={24} width={24} /></Link>
            <Link href={'/'}><Image src="/icons/Logo--Facebook.png" alt="Facebook" height={24} width={24} /></Link>
            <Link href={'/'}><Image src="/icons/Logo--Instagram.png" alt="Instagram" height={24} width={24} /></Link>
            <Link href={'/'}><Image src="/icons/Logo--Skype.png" alt="Skype" height={24} width={24} /></Link>
            <Link href={'/'}><Image src="/icons/Logo--Twitter.png" alt="Twitter" height={24} width={24} /></Link>
            <Link href={'/'}><Image src="/icons/Logo--Pinterest.png" alt="Pinterest" height={24} width={24} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;