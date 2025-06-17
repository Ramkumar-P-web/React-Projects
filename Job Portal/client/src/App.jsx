import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/Applyjob'
import Applications from './pages/Applications'
import { AppContext } from './context/AppContext'
import RecruiterLogin from './components/RecruiterLogin'


const App = () => {

    const {recruiterLogin} = useContext(AppContext);

  return (
    <div>
      { recruiterLogin && <RecruiterLogin/>}
        <Routes>
          <Route path='/' element={< Home />} ></Route>
          <Route path='/apply-job/:id' element={< ApplyJob />} ></Route>
          <Route path='/applications' element={< Applications />} ></Route>
        </Routes>
    </div>
  )
}

export default App