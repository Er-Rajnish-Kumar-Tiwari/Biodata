import React from 'react';
import profile from "../Pages/profile.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CV from "../Pages/CV.pdf";

const About = () => {
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "Rajnish_Tiwari_CV.pdf";
        link.click();
        toast.success("CV Downloaded!");
      };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#121212] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 inline-block">
          About Me
        </h2>

        <div className="md:flex md:items-center gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={profile} 
              alt="Profile"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>

          <div className="md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-purple-400 font-semibold">Tanish Tiwari</span>, a passionate and creative
              <span className="text-purple-400 font-semibold"> Full Stack Web and App Developer</span> and
              <span className="text-purple-400 font-semibold"> Software Developer</span> from India. I specialize in building responsive, scalable, and secure web and mobile applications using modern technologies.
            </p>

            <p className="text-lg leading-relaxed">
              With hands-on experience in
              <span className="text-orange-400 font-semibold"> MERN Stack</span>, React Native, Tailwind CSS, and RESTful APIs,
              I love solving real-world problems and crafting intuitive user interfaces.
            </p>

            <p className="text-lg leading-relaxed">
              I'm currently pursuing my <span className="text-teal-400 font-semibold">B.Tech in Computer Science</span> and
              continuously enhancing my skills by building real-world projects and learning new tools & frameworks.
            </p>

            <a
              onClick={handleDownload}
              download
              className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-medium shadow-md cursor-pointer"
            >
               Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
