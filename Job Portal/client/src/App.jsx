import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/Applyjob'
import Applications from './pages/Applications'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={< Home />} ></Route>
          <Route path='/apply-job/:id' element={< ApplyJob />} ></Route>
          <Route path='/application' element={< Applications />} ></Route>
        </Routes>
    </div>
  )
}

export default App