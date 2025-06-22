import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/Applyjob'
import Applications from './pages/Applications'
import { AppContext } from './context/AppContext'
import RecruiterLogin from './components/RecruiterLogin'
import RecruiterDasboard from './pages/RecruiterDasboard'
import AddJob from './components/AddJob'
import ManageJob from './components/ManageJob'
import ViewApplications from './components/ViewApplications'
import 'quill/dist/quill.snow.css'


const App = () => {

    const {recruiterLogin} = useContext(AppContext);

  return (
    <div>
      { recruiterLogin && <RecruiterLogin/>}
        <Routes>
          <Route path='/' element={< Home />} ></Route>
          <Route path='/apply-job/:id' element={< ApplyJob />} ></Route>
          <Route path='/applications' element={< Applications />} ></Route>
          <Route path='/recruiter-dasboard' element={<RecruiterDasboard/>}>
              <Route path='add-job' element={<AddJob/>}></Route>
              <Route path='manage-job' element={<ManageJob/>}></Route>
              <Route path='view-applications' element={<ViewApplications/>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App