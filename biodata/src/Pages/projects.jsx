import React from "react";
import { Code2 } from "lucide-react";
import Tan1 from "../Pages/p1.jpg";
import Tan2 from "../Pages/p2.jpg";
import Tan3 from "../Pages/p3.jpg";
import Tan4 from "../Pages/p4.jpg";
import Tan5 from "../Pages/p5.jpg";
import Tan6 from "../Pages/p6.jpg";
import Tan7 from "../Pages/p7.jpg";
import Tan8 from "../Pages/p8.jpg";
import Tan9 from "../Pages/p9.jpg";
import Tan10 from "../Pages/p10.jpg";
import Tan11 from "../Pages/p11.jpg";
import Tan12 from "../Pages/p12.jpg";
import Tan13 from "../Pages/p13.jpg";

const projectData = [
  {
    name: "Tanish Chat App",
    description:
      "Tanish Chat App – A real-time messaging app with instant chat, last seen, and responsive UI.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React-js",
      "Bootstrap",
      "Firebase",
      "Tailwind-CSS",
    ],
    link: "https://tanish-chat-app.onrender.com",
    image: Tan13,
  },
  {
    name: "Tanish Doctor Appointment Booking App",
    description:
      "User-friendly app that lets patients search doctors, view profiles, and book appointments seamlessly.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React-js",
      "Bootstrap",
      "MongoDB",
      "Node-js",
      "Express-js",
      "Tailwind-CSS",
    ],
    link: "https://doctor-booking-system-jdde.onrender.com",
    image: Tan13,
  },
  {
    name: "Tanish LMS App",
    description:
      "LMS platform for course creation, video lessons, quizzes, and student progress tracking.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React-js",
      "Bootstrap",
      "MongoDB",
      "Node-js",
      "Express-js",
      "Tailwind-CSS",
    ],
    link: "https://lms-786c.onrender.com/",
    image: Tan12,
  },
  {
    name: "Tanish Food Delivery App",
    description:
      "Full-stack food delivery app for browsing restaurants, placing orders, and real-time tracking.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React-js",
      "Bootstrap",
      "MongoDB",
      "Node-js",
      "Express-js",
      "Tailwind-CSS",
    ],
    link: "https://food-fronted.onrender.com/",
    image: Tan11,
  },
  {
    name: "Tanish Quiz App",
    description:
      "MCQ-based tech quiz app with topic selection and real-time score view.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Quiz-App/",
    image: Tan9,
  },
  {
    name: "TodoList App",
    description:
      "Powerful to-do list app to organize daily tasks, set deadlines, and mark progress.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Todo/",
    image: Tan10,
  },
  {
    name: "Weather App",
    description:
      "Fetches real-time weather data by city with temperature and forecast updates.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Wapp/",
    image: Tan1,
  },
  {
    name: "Student-Management-System",
    description:
      "Manage student records with CRUD operations for educational institutions.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Student/",
    image: Tan2,
  },
  {
    name: "Password-Generator",
    description:
      "Create strong passwords with criteria like length, symbols, and characters.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Password-Generator/",
    image: Tan3,
  },
  {
    name: "Study Library",
    description:
      "Academic platform for accessing books, articles, and research papers.",
    technologies: ["HTML", "CSS", "JavaScript", "React-js", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Library/",
    image: Tan4,
  },
  {
    name: "QR-Codes Generator",
    description:
      "Generate custom QR codes for URLs, Wi-Fi, contacts, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "J-Query", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/QR-Generator/",
    image: Tan5,
  },
  {
    name: "Simple Calculator",
    description:
      "Perform basic arithmetic with a sleek, real-time calculator interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Simple-Calculator/",
    image: Tan6,
  },
  {
    name: "Tic-Toc-Toe Game",
    description:
      "Classic two-player game with win/draw logic on a 3x3 grid.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/Tic-Toc-Toe-Game/",
    image: Tan7,
  },
  {
    name: "Rock-Paper-Scissors Game",
    description:
      "Fun game vs computer with random outcomes and rule-based logic.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://er-rajnish-kumar-tiwari.github.io/game/",
    image: Tan8,
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center gap-3">
          <Code2 className="text-purple-500" size={32} />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-purple-400">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-800/30 text-purple-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

