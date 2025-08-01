import React from 'react';
import './experience.css';

export default function Experience() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "30px",
    border: "2px solid #ccc",
    borderRadius: "15px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  };

  const headingStyle = {
    color: "maroon",
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "25px"
  };

  const pointsStyle = {
    color: "#000",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    textAlign: "left"
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>
        Internship Experience at NTS Nihon Global Pvt. Ltd. New Delhi (Software Development Engineer Intern)
      </h3>

      <div style={pointsStyle}>
        <p>▪ Duration: 1st May 2025 – 29th July 2025 (3 Months)</p>
        <p>▪ Role: Software Development Engineer (Intern)</p>
        <p>▪ Worked on web app development using MERN stack</p>
        <p>▪ Built and integrated RESTful backend APIs</p>
        <p>▪ Performed code debugging and optimization</p>
        <p>▪ Collaborated in Agile-based live projects</p>
        <p>▪ Gained real-world problem-solving experience</p>
        <p>▪ Proactively explored and learned new technologies</p>
      </div>
    </div>
  );
}
