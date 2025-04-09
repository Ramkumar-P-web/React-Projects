import React, { useEffect } from 'react'
import { useState } from 'react'

function Suggestion() {
     
    const [profile,setProfile] = useState(null)
    const [suggestions,setSuggestions] = useState([])
    const [following,setFollowing] = useState({}) // Object to store following for each post

    useEffect(() => {
        fetch('http://localhost:3000/profile').then(response => response.json()).then(data => setProfile(data)).catch(error => console.error(error))

        fetch('http://localhost:3000/suggestions').then(response => response.json()).then(data => setSuggestions(data)).catch(error => console.error(error))
    }, [])

    const toggleFollow = (postId) => {
        setFollowing((prevFollows) => ({
          ...prevFollows,
          [postId]: !prevFollows[postId], // Toggle the like state for the specific post
        }));
      };

  return (
    <div className='d-flex flex-column justify-content-center  w-100 px-5 my-0'>
        {profile ? <div className='d-flex m-1 p-2 px-0 my-1'>
                <img className='react_icons rounded-circle m-0 me-1' width="48" height="48" src={profile.profile_picture} alt="profile_picture" />
                <span className='react_icons fw-medium username'>{profile.username}
                <br/>
                <span className='react_icons fw-light'>{profile.name}</span>
                </span>
                <small className='ms-auto react_icons text-primary'>Switch</small>
             </div> : <p>Loading...</p>}
            
            <div className='d-flex p-2 px-0 my-0'> 
            <span>Suggested for you </span>
            <span className='ms-auto react_icons'>See All</span>
            </div>
        {
            suggestions && suggestions.map((suggestion) => (
                <div key={suggestion.id} className='d-flex m-1 p-2 px-0 mb-0'>
                    <img className='react_icons rounded-circle m-0 me-1' width="48" height="48" src={suggestion.profile_picture} alt="profile_picture" />
                    <div className='d-flex flex-column'>
                    <span className='react_icons m-0 p-0 lh-sm fw-medium username'>{suggestion.username}</span>
                    <small className='m-0 p-0 fw-light'>Suggested for you</small>
                    </div>
                    <small className={`ms-auto react_icons Follow ${ following[suggestion.username] ? "text-secondary": "text-primary"}`} onClick={()=>toggleFollow(suggestion.username)}>{ following[suggestion.username] ? "Following": "Follow"}</small>
                </div>
            ))
        }
        <div className='my-2'><span className='small d-flex flex-wrap gap-1'>
               <a className="link" href="https://about.instagram.com/" target="_blank">About. </a>
               <a className="link" href="https://help.instagram.com/" target="_blank">Help. </a>
               <a className="link" href="https://about.instagram.com/blog/" target="_blank">Press. </a>
               <a className="link" href="https://developers.facebook.com/docs/instagram" target="_blank">API. </a>
               <a className="link" href="https://about.instagram.com/about-us/careers" target="_blank">Jobs. </a>
               <a className="link" href="https://www.instagram.com/legal/privacy/" target="_blank">Privacy. </a>
               <a className="link" href="https://www.instagram.com/legal/terms/" target="_blank">Terms. </a>
               <a className="link" href="https://www.instagram.com/explore/locations/" target="_blank">Locations. </a>
               <a className="link" href="https://www.instagram.com/language/preferences/" target="_blank">Language. </a>
               <a className="link" href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer" target="_blank">Meta Verified.</a> 
                </span> <br />
                <small>© 2025 Instagram from Meta</small></div>
    </div>
  )
}

export default Suggestion