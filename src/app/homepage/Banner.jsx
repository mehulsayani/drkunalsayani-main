import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <section className='bg-gradient-to-r from-[#13547A] to-[#40AEB9B0] flex items-center justify-center'>
      <div className="flex w-full justify-between">
        <div className="py-8 max-lg:py-2 pl-20 max-lg:pl-4">
            <h1 className=' text-[2.5rem] max-lg:text-base w-[80%] max-lg:w-[90%] text-white mb-8 max-lg:mb-2'>Take the first step toward your desired look, avail a consultation today</h1>
            <a href="/book-appointment">
              <button className="bg-yellow-300 hover:bg-yellow-500 transition-colors
         text-black font-semibold px-8 py-3 max-lg:px-2 max-lg:py-1 rounded-xl max-lg:rounded shadow-md max-lg:text-sm">
         
          Book Appointment
        </button>
            </a>
        </div>
        <Image src={'/images/homepage/hero/image3.png'} alt='' width={1000} height={1000} className='w-[30rem] max-lg:w-[10rem] max-lg:h-[8rem]'/>
      </div>
    </section>
  )
}
