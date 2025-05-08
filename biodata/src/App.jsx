import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Education from "./education"
import Projects from "./projects"
import Skill from "../skills"
import Services from "../service"
import Header from "./header"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (

    <div>
      <Header />
      <ToastContainer/>
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/services" element={<Services />} />

      </Routes>

    </div>

  )
}

export default App