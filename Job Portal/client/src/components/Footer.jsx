import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='container flex justify-between items-center px-4 2xl:px-20 py-3 mx-auto mt-20'>
    
        <img onClick={()=>navigate('/')} className='cursor-pointer'  width={160} src={assets.logo} alt="logo" />
        <p className='flex-1 border-l border-gray-400 text-sm text-gray-500 max-sm:hidden pl-4 ml-5'>Copyright @RamStack | All rights reserved.</p>
    
    <div className='flex items-center justify-center gap-3 '>
        <img width={38} src={assets.facebook_icon} alt="facebook_icon" />
        <img width={38} src={assets.twitter_icon} alt="twitter_icon" />
        <img width={38} src={assets.instagram_icon} alt="instagram_icon" />
    </div>
    </div>
  )
}

export default Footer