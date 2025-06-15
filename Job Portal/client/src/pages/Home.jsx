import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <JobListing></JobListing>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home