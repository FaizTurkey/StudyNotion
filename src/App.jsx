import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Signup from './pages/Signup.jsx';
import NotFound from './pages/NotFound.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen h-screen bg-[#000814] flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App