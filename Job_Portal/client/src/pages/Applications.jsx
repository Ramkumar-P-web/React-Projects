import React, { useState } from 'react'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'

const Applications = () => {

  const [isEdit,setIsEdit] = useState(false);

  return ( true ? (
    <>
     <Navbar/>
     <div className='container px-4 2xl:px-20 mx-auto min-h-[65vh] my-10'>
     <h2 className='text-lg font-semibold text-neutral-800 '>Your Resume</h2>
     <div className='flex gap-2 mb-6 mt-3'>
      {
        isEdit ? (
          <>
          <label className='flex items-center gap-2' htmlFor="upload-resume">
            <p  className='cursor-pointer bg-blue-100 border border-blue-400 text-blue-600 rounded-lg px-4 py-2'>Select Resume</p>
            <input id='upload-resume' accept='application/pdf'  type="file" hidden  onChange={(e)=>setResume(e.target.files[0])}/>
            <img className='cursor-pointer' src={assets.profile_upload_icon} alt="upload-icon" />
           </label>
           <button onClick={()=>setIsEdit(false)}   className='cursor-pointer bg-green-50 border border-green-400 text-green-600 rounded-lg ml-2 px-4 py-2'>Save</button>
          </>
        ) : (
          <div className='flex gap-2'>
           <a className='bg-blue-100 border border-blue-400 text-blue-600 rounded px-4 py-2' href="">
            Resume
           </a>
           <button onClick={()=>setIsEdit(true)} className='bg-gray-50 border border-gray-400 text-gray-600 rounded px-3 py-2 cursor-pointer'>Edit</button>
          </div>
        )
      }
     </div>
     <h2 className='text-neutral-800 text-lg font-semibold mb-4'>Jobs Applied</h2>
     <div className='overflow-hidden border rounded-lg border-gray-400 '>
     <table className='min-w-full bg-white'>
      <thead >
        <tr >
          <th className='py-3 px-4 border-b border-b-gray-400 text-left'>Company</th>
          <th className='py-3 px-4 border-b border-b-gray-400 text-left'>Job Title</th>
          <th className='py-3 px-4 border-b border-b-gray-400 text-left max-sm:hidden'>Location</th>
          <th className='py-3 px-4 border-b border-b-gray-400 text-left max-sm:hidden'>Date</th>
          <th className='py-3 px-4 border-b border-b-gray-400 text-left'>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          jobsApplied.map((job,index)=>(
            <tr key={index} className='border-b border-b-gray-400'>
              <td className='flex gap-2 items-center py-3 px-4 '><img className='w-8 h-8 rounded-full' src={job.logo} alt="company-logo" />{job.company}</td>
              <td className='py-2 px-4 text-left'>{job.title}</td>
              <td className='py-2 px-4 text-left max-sm:hidden'>{job.location} </td>
              <td className='py-2 px-4 text-left max-sm:hidden'>{moment(job.date).format('ll')}</td>
              <td className='py-2 px-4 text-left'><span className={job.status == 'Accepted' ? 'bg-green-50 text-green-600 rounded-lg px-4 py-2': job.status == 'Rejected' ? 'bg-red-50 text-red-600 rounded-lg px-4 py-2': 'bg-blue-50 text-blue-600 rounded-lg px-4 py-2'} >{job.status}</span></td>
            </tr>
          ))
        }
      </tbody>
     </table>
     </div>
     </div>
     <Footer></Footer>
    </>
  ):(
    <Loading/>
  )
    
  )
}

export default Applications