import React from 'react'
import Pricing from './Pricing'
import TopNavBanner from './TopNavBanner'
import ConsultationSection from '../about-clinic/ConsultationSection'

export default function page() {
  return (
    <div className='pt-[8rem] max-lg:pt-[5rem]'>
      <TopNavBanner/>
      <Pricing/>
      <ConsultationSection/>
    </div>
  )
}
