import React, { useState } from 'react'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Applications = () => {

  const [isEdit,setIsEdit] = useState(false);

  return ( true ? (
    <>
     <Navbar/>
     <div className='container px-4 2xl:px-20 mx-auto min-h-[65vh] my-10'>
     <h2>Your Resume</h2>
     <div>
      {
        isEdit ? (
          <>
          </>
        ) : (
          <div>

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