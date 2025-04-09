import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Stories() {

      const [storiesData, setStoriesData] = useState([])

      useEffect(() => {
          fetch('http://localhost:3000/posts').
          then(response => response.json()).
          then(data => setStoriesData(data)).
          catch(error => console.error(error))
      }, [])

   

    const Navigate = useNavigate()

    function scrollLeft() {
      document.getElementById("scrollContainer").scrollBy({ left: -200, behavior: 'smooth' });
     }

  function scrollRight() {
      document.getElementById("scrollContainer").scrollBy({ left: 200, behavior: 'smooth' });
     }


  return (
<div className='d-flex w-100 my-5 align-items-center position-relative justify-content-center'>

    {/* Scrollable Story Bar */}
    <div className="scroll-btn text-secondary left-btn" onClick={()=>scrollRight() }>
    <i className="bi bi-arrow-left-circle fs-2"></i>
    </div>

    <div className="story-bar" id="scrollContainer">
        { storiesData && storiesData.map((story) => (
          <div key={story.id} className="story-item" onClick={() => Navigate("/Story/"+story.id)}>
            
              <img className={`story-img`} src={story.profile_picture} alt={story.username} />
            
            <p className='text-truncate' >{story.username}</p>
          </div>
        ))}
      </div>


      <div className="scroll-btn text-secondary right-btn" onClick={()=> scrollLeft()}>
      <i className="bi bi-arrow-right-circle fs-2"></i>
    </div>
        {/* {story && story.map((story)=>(
          <Story key={story.id} id={story.id} profile_picture={story.profile_picture} username={story.username} image={story.image} />
        ))} */}
    </div>
  )
}

export default Stories