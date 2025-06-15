import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {

  const { searchFilter, isSearched, setSearchFilter, jobs } = useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  // To Filter Jobs

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSelectCategory = (category) => {
    selectedCategories.includes(category) ? setSelectedCategories(selectedCategories.filter(c => c !== category)) : setSelectedCategories(prev => [...prev, category])
  };

  const handleSelectLocation = (location) => {
    selectedLocations.includes(location) ? setSelectedLocations(selectedLocations.filter(l => l !== location)) : setSelectedLocations(prev => [...prev, location])
  };

  useEffect(() => {
    const matchesCategory = (job) => selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation = (job) => selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesSearchTitle = (job) => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs.slice().reverse().filter(
      job => matchesCategory(job) && matchesLocation(job) && matchesSearchLocation(job) && matchesSearchTitle(job)
    );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [searchFilter, selectedCategories, selectedLocations, jobs]);

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 '>
      {/* Side Bar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* {Current Elements appear only when searched with any value from Hero component} */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-600 flex flex-wrap gap-1 '>
              {searchFilter.title &&
                (<span className='inline-flex items-center gap-2.5 bg-blue-100 border border-blue-200 px-4 py-1.5  rounded '>{searchFilter.title}
                  <img onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="cross_icon" /></span>)}
              {searchFilter.location &&
                (<span className='inline-flex items-center gap-2.5 bg-red-100 border border-red-200 px-4 py-1.5 ml-2  rounded '>{searchFilter.location}
                  <img onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="cross_icon" /></span>)}

            </div></>)
        }
        <button onClick={() => setShowFilter(prev => !prev)} className={` px-6 py-1.5 border border-gray-500 text-gray-600 rounded lg:hidden`}>{
          showFilter ? "Close" : "Filter"
        }</button>
        {/* Category Filter */}
        <div className={showFilter ? '' : 'max-lg:hidden'}>
          <h3 className='font-medium text-lg py-4'>Search by Categories</h3>
          <ul className='space-y-4 text-gray-600'>
            {
              JobCategories.map((category, index) => (
                <li className='flex items-center gap-3' key={index}>
                  <input className='scale-130 cursor-pointer' type="checkbox"
                    onChange={() => handleSelectCategory(category)}
                    checked={selectedCategories.includes(category)} />{category}({ })</li>
              ))
            }
          </ul>
        </div>
        {/* Location Filter */}
        <div className={showFilter ? 'mt-5' : 'max-lg:hidden mt-5'}>
          <h3 className='font-medium text-lg py-4'>Search by Locations</h3>
          <ul className='space-y-4 text-gray-600'>
            {
              JobLocations.map((location, index) => (
                <li className='flex items-center gap-3' key={index}>
                  <input className='scale-150 cursor-pointer' type="checkbox"
                    onChange={() => handleSelectLocation(location)}
                    checked={selectedLocations.includes(location)} />{location}({ })</li>
              ))
            }
          </ul>
        </div>
      </div>
      {/* Job Listings */}
      <section className='w-full lg:3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-listing'>Latest jobs</h3>
        <p className='mb-8'>Get your desired job from top companies</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {
            filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
              <JobCard key={index} job={job} />
            ))
          }
        </div>

        {/* Pagination */}
        {
          filteredJobs.length > 0 && (
            <div className='w-full flex items-center justify-center gap-3  mt-10'>
              <a onClick={() => setCurrentPage(prev => prev == 1 ? 1 : prev - 1)} href="#job-listing"> <img className='h-4' src={assets.left_arrow_icon} alt="left_arrow_icon" /></a>
              {
                Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
                  <a href="#job-listing">
                    <button onClick={() => setCurrentPage(index + 1)} className={`flex items-center justify-center w-10 h-10  rounded border cursor-pointer
                     ${currentPage === index + 1 ? 'bg-blue-100 border-blue-800 text-blue-600 ' : ' border-gray-400 text-gray-400'}`}>{index + 1}</button>
                  </a>
                ))
              }
              <a onClick={() => setCurrentPage(prev => prev == Math.ceil(filteredJobs.length / 6) ? Math.ceil(filteredJobs.length / 6) : prev + 1)} href="#job-listing"> <img className='h-4' src={assets.right_arrow_icon} alt="right_arrow_icon" /></a>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default JobListing