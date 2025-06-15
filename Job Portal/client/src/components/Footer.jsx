import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container flex justify-between items-center px-4 2xl:px-20 py-3 mx-auto mt-20'>
    
        <img className={160} src={assets.logo} alt="logo" />
        <p className='flex-1 border-l border-gray-400 text-sm text-gray-500 max-sm:hidden pl-4 ml-5'>Copyright @RamStack | All rights reserved.</p>
    
    <div className='flex items-center justify-center gap-3 '>
        <img className={38} src={assets.facebook_icon} alt="facebook_icon" />
        <img className={38} src={assets.twitter_icon} alt="twitter_icon" />
        <img className={38} src={assets.instagram_icon} alt="instagram_icon" />
    </div>
    </div>
  )
}

export default Footer