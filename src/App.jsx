import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
import Home from './Pages/home';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import About from './Pages/about';
import Services from './Pages/services';
import Education from './Pages/education';
import Skill from './Pages/skills';
import SkillPage from './Pages/skills';
import Experience from './Pages/experience';
import Projects from './Pages/projects';

const App = () => {

  return (

    <>
      <div>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/education' element={<Education />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>

        <Footer/>
        <ToastContainer/>
      </div>

    </>
  )
}

export default App