import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJob = () => {

const navigate = useNavigate();

  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto border-2 border-gray-200 rounded-lg'>
      <table className='min-w-full max-w-4xl bg-white  max-sm:text-sm'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th className='px-4 py-2 text-left'>#</th>
            <th className='px-4 py-2 text-left'>Job Title</th>
            <th className='px-4 py-2 text-left max-sm:hidden'>Date</th>
            <th className='px-4 py-2 text-left max-sm:hidden'>Location</th>
            <th className='px-4 py-2 text-left'>Applicants</th>
            <th className='px-4 py-2 text-left'>Visible</th>
          </tr>
        </thead>
        <tbody>
          {
            manageJobsData.map((job,index)=>(
              <tr className='border-b border-gray-300' key={index}>
                <td className='px-4 py-2 text-left'>{job._id}</td>
                <td className='px-4 py-2 text-left'>{job.title} </td>
                <td className='px-4 py-2 text-left max-sm:hidden'>{moment(job.date).format('ll')} </td>
                <td className='px-4 py-2 text-left max-sm:hidden'>{job.location} </td>
                <td className='px-4 py-2 text-left'>{job.applicants} </td>
                <td className='px-4 py-2 text-left'> <input type="checkbox" /> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
      <button onClick={e=>navigate('/recruiter-dasboard/add-job')} className='w-28 bg-black py-3 mt-4 text-white text-bold rounded cursor-pointer'>Add New job</button>
    </div>
  )
}

export default ManageJob