import React from 'react'
import Blog from './Blog'
import TopNavBanner from './TopNavBanner'

export default function page() {
  return (
    <div className='pt-[8rem]'>
      <TopNavBanner/>
      <Blog/>
    </div>
  )
}
