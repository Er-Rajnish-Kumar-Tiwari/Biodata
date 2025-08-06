import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CV from "../Pages/CV.pdf";
import profile from "../Pages/profile.jpg"

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Rajnish_Tiwari_CV.pdf";
    link.click();
    toast.success("CV Downloaded!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white px-4 relative overflow-hidden font-[Poppins]">

      {/* Main Glass Container */}
      <div className="z-10 backdrop-blur-lg bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/20 text-center max-w-3xl">
        {/* Avatar */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-2 border-cyan-200 shadow-sm"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-cyan-500 blur-md"></div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-cyan-400">Rajnish Kumar Tiwari</span>
        </h1>

        {/* Short Intro */}
        <p className="text-gray-300 text-sm sm:text-base mb-4">
          Passionate Full Stack Developer with a strong foundation in MERN Stack and Application Development. I love solving real-world problems with clean and efficient code.
        </p>

        {/* Typewriter Roles */}
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            2000,
            "Application Developer",
            2000,
            "Software Developer Engineer",
            2000,
          ]}
          wrapper="span"
          speed={60}
          className="text-xl sm:text-2xl text-red-800 font-bold"
          repeat={Infinity}
        />

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mt-8">
          <a href="https://github.com/Er-Rajnish-Kumar-Tiwari" target="_blank" rel="noreferrer" className="text-gray-950 transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rajnish-kumar-tiwari-8661522b0" target="_blank" rel="noreferrer" className="text-blue-500 transition-all">
            <FaLinkedin />
          </a>
          <a href="tel:+919572973654" target="_blank" rel="noreferrer" className="text-blue-600 transition-all">
            <FaTelegram />
          </a>
          <a href="mailto:rajnishkumartiwari260@gmail.com" target="_blank" rel="noreferrer" className="text-red-400 transition-all">
            <FaEnvelope />
          </a>
        </div>

        {/* Download CV */}
        <button
          onClick={handleDownload}
          className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 mx-auto shadow-lg"
        >
          <FiDownload />
          Resume
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

