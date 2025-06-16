import React from 'react'
import Reviews from './Reviews'
import TopNavBanner from './TopNavBanner'
import ConsultationSection from '../about-clinic/ConsultationSection'

export default function page() {
  return (
    <div className='pt-[8rem] max-lg:pt-[5rem]'>
      <TopNavBanner/>
      <Reviews/>
      <ConsultationSection/>
    </div>
  )
}
