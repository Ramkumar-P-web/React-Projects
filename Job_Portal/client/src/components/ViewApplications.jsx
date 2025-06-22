import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='overflow-x-auto max-w-4xl border-2 border-gray-200 rounded-lg'>
      <table className='w-full  bg-white  max-sm:text-sm'>
        <thead >
          <tr className='border-b border-gray-300'>
            <th className='px-4 py-2 text-left'>#</th>
            <th className='px-4 py-2 text-left'>User Name</th>
            <th className='px-4 py-2 text-left max-sm:hidden'>Job Title</th>
            <th className='px-4 py-2 text-left max-sm:hidden'>Locatiion</th>
            <th className='px-4 py-2 text-left'>Resume</th>
            <th className='px-4 py-2 text-left'>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              viewApplicationsPageData.map((user,index)=>(
                <tr className='border-b border-gray-300 text-gray-700' key={index}>
                 <td className='px-4 py-2 text-left' >{user._id}</td>
                 <td className='px-4 py-2 text-left flex items-center gap-2'>
                  <img className='w-10 h-10 rounded-full max-sm:hidden' src={user.imgSrc} alt="profileImg" />{user.name} </td>
                 <td className='px-4 py-2 text-left max-sm:hidden'>{user.jobTitle} </td>
                 <td className='px-4 py-2 text-left max-sm:hidden'>{user.location} </td>
                 <td className='px-4 py-2 text-left'><span className='text-sm text-blue-600 bg-blue-50 rounded px-3 py-2 flex items-center justify-center gap-1'>Resume <img src={assets.resume_download_icon} alt="download" /></span></td>
                 <td className='relative px-4 py-2 text-left group text-2xl'>... <div className='absolute right-0 md:left-0 top-0 hidden z-10 p-2 group-hover:flex flex-col gap-2 border border-gray-400 rounded bg-white'>
                  <p className='bg-green-50 text-green-500 text-sm rounded cursor-pointer'>Accept</p>
                  <p className='bg-red-50 text-red-500 text-sm rounded cursor-pointer'>Reject</p>
                  </div></td>
                </tr>
              ))
            }
          </tbody>
      </table>
      </div>
    </div>
  )
}

export default ViewApplications