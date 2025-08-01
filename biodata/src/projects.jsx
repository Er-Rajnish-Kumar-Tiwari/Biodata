import React from 'react';
import Tan1 from './p1.jpg';
import Tan2 from './p2.jpg';
import Tan3 from './p3.jpg';
import Tan4 from './p4.jpg';
import Tan5 from './p5.jpg';
import Tan6 from './p6.jpg';
import Tan7 from './p7.jpg';
import Tan8 from './p8.jpg';
import Tan9 from './p9.jpg';
import Tan10 from './p10.jpg';
import Tan11 from './p11.jpg';
import Tan12 from './p12.jpg';
import Tan13 from './p13.jpg';
import './projects.css';

const projectData = [
  {
    name: 'Tanish Doctor Appointment Booking App',
    description:
      'Tanish Doctor Appointment Booking App is a user-friendly platform that allows patients to book appointments with doctors online. The app provides a seamless experience for users to search for doctors, view their profiles, and schedule appointments at their convenience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap','MongoDB','Node-js','Express-js','Tailwind-CSS'],
    link: 'https://doctor-booking-system-jdde.onrender.com',
    image: Tan13,
  },

  {
    name: 'Tanish LMS App',
    description:
      'Tanish LMS (Learning Management System) App is a modern educational platform designed to help students and teachers manage online learning easily. It supports course creation, video lessons, quizzes, assignments, and student progress tracking — all in one place.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap','MongoDB','Node-js','Express-js','Tailwind-CSS'],
    link: 'https://lms-786c.onrender.com/',
    image: Tan12,
  },
  
  {
    name: 'Tanish Food Delivery App',
    description:
      'This is a full-stack Tanish Food Delivery Application built using the MERN stack MongoDB, Express.js, React.js, and Node.js. The app allows users to browse food items from various restaurants, place orders, and track their delivery in real-time.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap','MongoDB','Node-js','Express-js','Tailwind-CSS'],
    link: 'https://food-fronted.onrender.com/',
    image: Tan11,
  },

  {
    name: 'Tanish Quiz App',
    description:
      'The Quiz App is an interactive and engaging platform designed to help users test and improve their knowledge on computer topics. The app offers a seamless experience by providing multiple-choice questions such as technology. Users can select their desired topic and view their scores in real-time.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Quiz-App/',
    image: Tan9,
  },
  {
    name: 'TodoList App',
    description:
      'The To-Do List App is a simple yet powerful productivity tool designed to help users organize and manage their daily tasks and goals efficiently. This app enables users to create, prioritize, and track tasks, ensuring that nothing is forgotten and everything is completed on time. With a clean and intuitive user interface, users can easily add new tasks, set deadlines, mark tasks as completed, and categorize them for better organization.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Todo/',
    image: Tan10,
  },
  {
    name: 'Weather App',
    description:
      'This project is a weather application that allows users to check the current weather conditions of any city or location. The app will fetch real-time weather data from a weather API and display information such as temperature. The user will be able to search for specific cities, and the app will provide an updated forecast.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Wapp/',
    image: Tan1,
  },
  {
    name: 'Student-Management-System',
    description:
      'The Student Management System is a web-based application designed to help manage student data and streamline administrative tasks for schools, colleges, or educational institutions. The system will allow users (administrators or teachers) to add, view, update, Search, and delete student records. It will store details such as student UserName, E-mail, contact details, and Feedback.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Student/',
    image: Tan2,
  },
  {
    name: 'Password-Generator',
    description:
      'The Password Generator is a web-based application that allows users to generate strong and secure passwords based on various criteria. The user can specify the password length and choose options like including uppercase letters, lowercase letters, numbers, and special characters. The generated password will be displayed to the user with the option to copy it to the clipboard for easy use.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Password-Generator/',
    image: Tan3,
  },
  {
    name: 'Study Library',
    description:
      'The Study Library is an online platform designed to provide users with a rich collection of academic resources, books, articles, and research papers. Users can search, view, and download digital copies of materials or borrow physical books from the library if available. The platform also includes tools for taking notes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React-js', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Library/',
    image: Tan4,
  },
  {
    name: 'QR-Codes Generator',
    description:
      'The QR Code Generator is a web-based application that allows users to create custom QR codes for various purposes, such as websites, text, email addresses, phone numbers, or Wi-Fi access. The generated QR code can be scanned using a mobile device to quickly access the encoded information. Users can download the generated QR code image for personal or professional use.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'J-Query', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/QR-Generator/',
    image: Tan5,
  },
  {
    name: 'Simple Calculator',
    description:
      'The Simple Calculator is a web-based application that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator will have a clean and intuitive interface where users can input numbers and operators to calculate results in real-time. This app is designed to handle both single and multi-step calculations, making it a versatile tool for everyday use.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Simple-Calculator/',
    image: Tan6,
  },
  {
    name: 'Tic-Toc-Toe Game',
    description:
      'The Tic-Tac-Toe Game is a simple two-player game that allows two players to compete on a 3x3 grid. The players alternate turns, one using "X" and the other using "O," placing their marks in empty squares. The first player to align three of their marks horizontally, vertically, or diagonally wins the game. If all squares are filled and there is no winner, the game ends in a draw.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/Tic-Toc-Toe-Game/',
    image: Tan7,
  },
  {
    name: 'Rock-Paper-Scissors Game',
    description:
      'This is a simple web-based implementation of the classic rock-paper-scissors game. Users can play against the computer, where both the player and the computer choose either "rock", "paper", or "scissors". The winner is determined based on the following rules: i.Rock crushes Scissors ii.Scissors cuts Paper iii.Paper covers Rock',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://er-rajnish-kumar-tiwari.github.io/game/',
    image: Tan8,
  },
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-heading"><b>Projects</b></h2>
      {projectData.map((project, index) => (
        <div className="project-container" key={index}>
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.name} className="project-image" />
          </div>
          <div className="project-card">
            <h3 className="section-title"><b>Project Name:</b></h3>
            <p><b>{project.name}</b></p>

            <h4 className="section-title"><b>Project Description:</b></h4>
            <p><b>{project.description}</b></p>

            <h4 className="section-title"><b>Technologies Used:</b></h4>
            <p><b>{project.technologies.join(', ')}</b></p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-link"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}