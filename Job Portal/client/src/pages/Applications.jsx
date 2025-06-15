import React from 'react'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Applications = () => {
  return ( true ? (
    <>
     <Navbar/>
     <div>

     </div>
     <Footer></Footer>
    </>
  ):(
    <Loading/>
  )
    
  )
}

export default Applications