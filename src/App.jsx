import React from 'react'
import "./fonts/font-icons/css/all.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './components/pages/land'
import Loginpage from './components/pages/login'
import Profile from './components/pages/profile'
import About from './components/pages/about'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Land />}/>
            <Route path='/login' element={<Loginpage />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App