//rfce for boiler plate

import React from 'react'

function Navbar() {
  return (
    <div className='ms-3 d-flex flex-column gap-3 ps-3 pe-0 pt-3 pb-1 position-fixed'>
        <div className=' mt-3 mb-1 tab'><img className="Instagram_name" src="src\assets\Instagram_logo (1).svg" alt="Instagram_name" /></div>
        <div className='d-flex gap-3 fw-medium tab p-2'><i className="bi bi-house-door-fill fs-5"></i>Home</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-search fs-5 fw-bold"></i>Search</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-compass fs-5 fw-bold"></i>Explore</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-play-btn fs-5 fw-bold"></i>Reels</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-chat-heart fs-5 fw-bold"></i>Messeges</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-heart fs-5 fw-bold"></i>Notifications</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-plus-circle fs-5 fw-bold"></i>Create</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-file-bar-graph fs-5 fw-bold"></i>Dashboard</div>
        <div className='d-flex gap-3 tab p-2'><i className="bi bi-person-circle fs-5 fw-bold"></i>Profile</div>
        <div className='d-flex gap-3 tab p-2 '><i className="bi bi-list fs-5 fw-bold"></i>More</div>
    </div>
  )
}

export default Navbar