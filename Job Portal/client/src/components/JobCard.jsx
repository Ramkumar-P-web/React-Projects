import React from 'react'
import { assets } from '../assets/assets'


const JobCard = ({job}) => {

    
    return (
        
            <div className='border border-gray-200 p-6 shadow-md rounded-lg'>
                <div className='flex justify-between items-center'>
                     <img className='h-8' src={assets.company_icon} alt="company_icon" />
                </div>
                <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
                <div className='flex items-center gap-3 text-xs mt-2'>
                    <span className='bg-blue-100 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
                    <span className='bg-red-100 border border-red-200 px-4 py-1.5 rounded' >{job.level}</span>
                </div>
                <p className='text-gray-400 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description?job.description.slice(0,150): ""}}></p>
                <div className='flex text-sm gap-4 mt-4'>
                    <button className='bg-blue-600 text-white rounded py-2 px-4'>Apply now</button>
                    <button className='border border-gray-500 text-gray-500 rounded py-2 px-4'>Learn more</button>
                </div>
            </div>

    )
}     

export default JobCard