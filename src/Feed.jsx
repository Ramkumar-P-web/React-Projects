import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <div>
        <div className='Stories'><Stories/></div>
        <div className='Posts'><Posts/></div>
    </div>
  )
}

export default Feed