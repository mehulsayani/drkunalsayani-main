import React from 'react'
import Pricing from './Pricing'
import TopNavBanner from './TopNavBanner'

export default function page() {
  return (
    <div className='pt-[8rem]'>
      <TopNavBanner/>
      <Pricing/>
    </div>
  )
}
