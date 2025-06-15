import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'

const ApplyJob = () => {
  
  const { id } = useParams();
  const [jobData,setJobData] = useState(null);
  const {jobs} = useContext(AppContext);

  const fetchJobData = async ()=>{
    const data = jobs.filter(job=> job._id === id);
    if(data.length !== 0){
      setJobData(data[0]);
      console.log(data[0]);
      
    }
  };

  useEffect(()=>{
    if(jobs.length>0){
    fetchJobData()
    }
  },[id,jobs]);

  return ( jobData ?(
    <>
    <Navbar></Navbar>

    <div className='min-h-screen flex flex-col py-10 px-4 2xl:px-20 mx-auto container'>
      <div className='bg-white text-black w-full rounded-lg'>
        <div className='flex flex-wrap gap-8 justify-center md:justify-between px-14 py-20 bg-sky-50 mb-6 border border-sky-500 rounded-xl'>
          <div className='flex flex-col md:flex-row items-center'>
            <img className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border border-gray-100' src={jobData.companyId.image} alt="companyId.image" />
            <div className='text-center md:text-left text-neutral-700'>
              <h1 className='text-2xl sm:text-4xl font-medium'>{jobData.title}</h1>
              <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2 '>
                <span className='flex items-center gap-1'><img src={assets.suitcase_icon} alt="suitcase_icon" />{jobData.companyId.name}</span>
                <span className='flex items-center gap-1'><img src={assets.location_icon} alt="location_icon" />{jobData.location}</span>
                <span className='flex items-center gap-1'><img src={assets.person_icon} alt="person_icon" />    {jobData.level}</span>
                <span className='flex items-center gap-1'><img src={assets.money_icon} alt="money_icon" />CTC:{kconvert.convertTo(jobData.salary)}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center '>
              <button className='bg-blue-600 px-10 py-2.5 text-white rounded'>Apply now</button>
              <p className='mt-1 text-gray-500'>Posted {moment(jobData.date).fromNow()}</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-start'>
          <div className='w-full lg:w-2/3 '>
            <h2 className='font-bold text-2xl mb-4'>Job description</h2>
            <div className='rich-text' dangerouslySetInnerHTML={{__html:jobData.description}}></div>
            <button className='bg-blue-600 px-10 py-2.5 text-white rounded mt-10'>Apply now</button>
          </div>
          {/* Right section more Related Jobs */}
          <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
            <h2>More jobs from {jobData.companyId.name}</h2>
            <div>
              {
                jobs.filter(job=> job._id !== jobData._id && job.companyId.name === jobData.companyId.name).slice(0,4).map((job,index)=>(
                  <JobCard key={index} job={job}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    </>):
    (
     <Loading/>
    )
  )
}

export default ApplyJob