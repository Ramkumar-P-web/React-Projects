import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';

const JobListing = () => {
  const {searchFilter,isSearched,setSearchFilter} = useContext(AppContext);

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 '>
      {/* Side Bar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* {Current Elements appear only when searched with any value from Hero component} */}
        {isSearched&&(searchFilter.title !== "" || searchFilter.location !== "")&&(
        <>
          <h3 className='font-medium text-lg mb-4'>Current Search</h3>
          <div className='mb-4 text-gray-600 flex flex-wrap'>
            {searchFilter.title && 
            (<span className='inline-flex items-center gap-2.5 bg-blue-100 border border-blue-200 px-4 py-1.5  rounded '>{searchFilter.title}
             <img onClick={e => setSearchFilter(prev=>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="cross_icon" /></span>)}
            {searchFilter.location && 
            (<span className='inline-flex items-center gap-2.5 bg-red-100 border border-red-200 px-4 py-1.5  rounded '>{searchFilter.location}
             <img onClick={e => setSearchFilter(prev=>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="cross_icon" /></span>)}
            
          </div></>)
        }
      </div>
    </div>
  )
}

export default JobListing