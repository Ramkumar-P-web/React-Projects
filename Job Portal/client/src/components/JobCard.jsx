import React from 'react'
import { assets } from '../assets/assets'


const JobCard = (job) => {
    return (
        <>
            <div className='border box-shadow'>
                <div> <img src={assets.company_icon} alt="company_icon" /></div>
                <h4 className='font-medium text-lg'>{job.title}</h4>
                <div>
                    <span className='bg-blue-100 border border-blue-200 text-sm px-4 m-1'>{job.location}</span>
                    <span className='bg-blue-100 border border-blue-200 text-sm px-4 m-1'>{job.level}</span>
                </div>
                <p dangerouslySetInnerHTML={{__html:job.description.slice(0,150) }}></p>
                <div>
                    <button className='bg-blue-600 text-white rounded'>Apply now</button>
                    <button className='border border-gray-200 text-gray-600 rounded'>Learn more</button>
                </div>

            </div>
        </>
    )
}

export default JobCard