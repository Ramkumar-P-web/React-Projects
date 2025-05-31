import React from 'react'
import Navbar from './Navbar'
import Feed from './Feed'
import Suggestion from './Suggestion'

function App() {
  return (
    <div className='vh-100 d-flex'>
      <div className='w-20'><Navbar/></div>
      <div className='w-50'><Feed/></div>
      <div  className='w-30'><Suggestion/></div>
    </div>
  )
}

export default App