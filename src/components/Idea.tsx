import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Idea() {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap bg-white px-6 md:px-12 py-8 lg:py-16 gap-2">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 bg-[#2A254B] text-white p-6 md:p-12 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-extralight font-clash mb-4">It started with a small idea</h1>
              <p className="text-base md:text-lg mb-6">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
              <Button variant="default" className="w-[170Hug] md:w-auto  bg-[#4E4D93] h-[56Hug] gap-y-[10px] text-sm md:text-base px-6 py-3 text-white mt-4 md:mt-44 hover:bg-neutral-300 hover:text-[#2A254B]">
                View collection
              </Button>
            </div>
      
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/Idea.png"
                alt="Story Image"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
    </div>
  )
}