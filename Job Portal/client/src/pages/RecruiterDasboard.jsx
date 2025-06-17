import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const RecruiterDasboard = () => {

    const navigate = useNavigate();

  return (
    <div className='min-h-screen'>
        {/* Navbar for Recruiter */}
        <div className='shadow border-b border-b-gray-300 py-4'>
        <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
            <img onClick={()=>navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="websiteLogo" />
            <div className='flex items-center gap-4'>
                <p className='max-sm:hidden'>Hi! Ramkumar</p>
                <div className='relative group'>
                    <img className='w-10 border rounded-full' src={assets.upload_area} alt="person" />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 pt-12'>
                        <ul className='list-none m-0 p-2 bg-white rounded-md text-sm'>
                            <li className='px-2 py-1 cursor-pointer rounded-md pr-10 bg-red-100 text-red-400'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        {/* Main Dashboard SideBar */}
        <div className='flex items-start'>
             <div className='inline-block min-h-screen border-r-2 border-r-gray-300'>
                <ul className='pt-5 flex flex-col items-start text-gray-800 '>
                    <NavLink className={({isActive})=>`flex items-center gap-3 p-3 sm:px-6 w-full hover:bg-gray-100 
                    ${isActive && 'bg-blue-100 text-blue-600 border-r-4 border-blue-500'} `} to={'/recruiter-dasboard/add-job'}>
                     <img src={assets.add_icon} alt="home" /><p>Add Job</p>
                      </NavLink>
                    <NavLink className={({isActive})=>`flex items-center gap-3 p-3 sm:px-6 w-full hover:bg-gray-100 
                    ${isActive && 'bg-blue-100 text-blue-600 border-r-4 border-blue-500'} `}  to={'/recruiter-dasboard/manage-job'}> 
                    <img src={assets.home_icon} alt="home" /><p>Mange Jobs</p>
                    </NavLink>
                    <NavLink className={({isActive})=>`flex items-center gap-3 p-3 sm:px-6 w-full hover:bg-gray-100 
                    ${isActive && 'bg-blue-100 text-blue-600 border-r-4 border-blue-500'} `}  to={'/recruiter-dasboard/view-applications'}> 
                    <img src={assets.person_tick_icon} alt="home" /><p>View Applications</p>
                    </NavLink>
                </ul>
             </div>
             <Outlet/>
        </div>
    </div>
  )
}

export default RecruiterDasboard