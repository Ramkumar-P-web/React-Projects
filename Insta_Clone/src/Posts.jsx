import React, { useEffect } from 'react'
import Post from './Post'

function Posts() {

    const [posts, setPosts] = React.useState([])
    useEffect(() => {
        fetch('http://localhost:3000/posts').then(response => response.json()).then(data => setPosts(data)).catch(error => console.error(error))
    }, [])

    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 px-5'>
        {posts && posts.map((post)=>(
          <Post key={post.id} id={post.id} profile_picture={post.profile_picture} username={post.username} image={post.image} caption={post.caption} likes={post.likes} comments={post.comments} />
        ))}
    </div>
  )
}

export default Posts