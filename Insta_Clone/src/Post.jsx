import { useState } from 'react'
import React from 'react'
import CommentSection from './CommentSection'

function Post(props) {

    const [like, setLike] = useState(0)
    const [comments, setComments] = useState(props.comments || [])
    const [Commentdisplay,setCommentdisplay] = useState({}) // Object to store Commentdisplay for each post
    const [textlike, setTextlike] = useState(props.likes || 0)
    const [like1, setLike1] = useState(1)
    // Function to add a new comment
    const addComment = (newComment) => {
      setComments([...comments, newComment])
  };

  const toggleComment = (postId) => {
    setCommentdisplay((preComment) => ({
      ...preComment,
      [postId]: !preComment[postId], // Toggle the like state for the specific post
    }));
  };


  return (
    
        <div key={props.id}  className='postion-relative'>
         <div className='d-flex position-relative my-2'>
            <img className='react_icons rounded-circle m-0 me-1 profile_picture' width="40" height="40" src={props.profile_picture} alt="profile_picture" />
            <span className='my-2 fw-medium  react_icons'>{props.username}</span>
            <i className="bi bi-three-dots fs-5 position-absolute top-50 end-0  react_icons"></i>
         </div>
         
        <img className='post_image' src={props.image} alt="post_image" />
        
        <div className='d-flex position-relative my-2 py-2 mb-0'>
            <i id={props.id} className={`fs-4 mx-1 react_icons bi ${ like ? "bi-heart-fill text-danger" : "bi-heart"}`} onClick={()=>{
              setLike(!like)
              setTextlike((prevLikes) => like ? prevLikes - 1 : prevLikes + 1)
              }}></i>
            <i className="bi bi-chat fs-4 mx-1 react_icons" onClick={()=>toggleComment(props.id)}></i>
            <i className="bi bi-send fs-4 mx-1 react_icons"></i>
            <i className="bi bi-bookmark fs-4 position-absolute end-0 react_icons"></i>
        </div>
        <p>{props.caption}</p>

         <div className='d-flex flex-column justify-content-between'>
           <div> <span className=' react_icons'>{textlike} likes</span></div>
           <div> <span className=' react_icons' onClick={()=>toggleComment(props.id)}>view {props.comments.length > 1 ? 'all' : ''} {props.comments.length} {props.comments.length > 1 ? 'comments' : 'comment'}</span></div>
         </div>

          {/* Comment Section */}
          <div className={`${Commentdisplay[props.id] ? "d-block" : "d-none"}`}><hr />
          <CommentSection comments={comments} addComment={addComment} /></div>
         <hr />
         </div>
     
  )
}

export default Post