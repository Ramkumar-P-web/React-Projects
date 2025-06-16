import React, { useState } from 'react'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'

const Applications = () => {

  const [isEdit,setIsEdit] = useState(false);

  return ( true ? (
    <>
     <Navbar/>
     <div className='container px-4 2xl:px-20 mx-auto min-h-[65vh] my-10'>
     <h2 className='text-xl font-semibold'>Your Resume</h2>
     <div className='flex gap-2 mb-6 mt-3'>
      {
        isEdit ? (
          <>
          <label htmlFor="upload-resume">
            <p>Select Resume</p>
            <input id='upload-resume' accept='application/pdf'  type="file" hidden  onChange={(e)=>setResume(e.target.files[0])}/>
            <img src={assets.profile_upload_icon} alt="upload-icon" />
           </label>
           <button  className='bg-blue-100 border border-blue-400 text-blue-600 rounded px-4 py-2'>Save</button>
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

     </div>
     <Footer></Footer>
    </>
  ):(
    <Loading/>
  )
    
  )
}

export default Applications