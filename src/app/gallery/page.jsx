import React from 'react'
import TopNavBanner from './TopNavBanner'
import Gallery from './Gallery'

export default function page() {
  return (
    <div className='pt-[8rem]'>
      <TopNavBanner/>
      <Gallery/>
    </div>
  )
}
