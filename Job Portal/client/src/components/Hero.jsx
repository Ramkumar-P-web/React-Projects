import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 py-16 text-center mx-2 rounded-xl text-white'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move starts Right Here - Explore The Best Job Opportunities And Take The First Step Toward Your Future!</p>
            <div className='flex justify-between items-center bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.search_icon} alt="search_icon" />
                    <input type="text" placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' />
                </div>
                <p className='px-2 text-gray-400 text-2xl font-light h-9'>|</p>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt="search_icon" />
                    <input type="text" placeholder='Location'className='max-sm:text-xs p-2 rounded outline-none w-full' />
                </div>
                <button className='bg-blue-600 px-6 sm:px-9 py-2 rounded text-white m-1'>Search</button>
        </div>
        </div>

        <div className='flex border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md'>
            <div className='flex flex-wrap justify-center gap-10 lg:gap-16' >
                <p className='font-medium'>Trusted by</p>
                <img className='h-6' src={assets.microsoft_logo} alt='microsoft_logo' />
                <img className='h-6' src={assets.accenture_logo} alt='accenture_logo' />
                <img className='h-6' src={assets.samsung_logo} alt='samsung_logo' />
                <img className='h-6' src={assets.walmart_logo} alt='walmart_logo' />
                <img className='h-6' src={assets.adobe_logo} alt='adobe_logo' />
                <img className='h-6' src={assets.amazon_logo} alt='amazon_logo' />
            </div>
        </div>
    </div>
    
  )
}

export default Hero