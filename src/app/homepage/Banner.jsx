import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <section className='bg-gradient-to-r from-[#13547A] to-[#40AEB9B0] flex items-center justify-center'>
      <div className="flex w-full justify-between">
        <div className="py-8 pl-20">
            <h1 className=' text-[2.5rem] w-[80%] text-white mb-8'>Take the first step toward your desired look, avail a consultation today</h1>
            <button className="bg-white hover:bg-[#1561a5] transition-colors
         text-black font-semibold px-8 py-3 max-lg:px-2 max-lg:py-1 rounded-xl max-lg:rounded shadow-md max-lg:text-sm">
         
          Book Appointment
        </button>
        </div>
        <Image src={'/images/homepage/hero/image3.png'} alt='' width={1000} height={1000} className='w-[30rem]'/>
      </div>
    </section>
  )
}
