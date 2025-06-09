import React from 'react'
import Reviews from './Reviews'
import TopNavBanner from './TopNavBanner'

export default function page() {
  return (
    <div className='pt-[8rem] max-lg:pt-[5rem]'>
      <TopNavBanner/>
      <Reviews/>
    </div>
  )
}
