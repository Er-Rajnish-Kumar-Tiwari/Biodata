import React from 'react';
import './skills.css';
import { Tan } from './src/about';

export default function Skills() {
  return (
    <div>
      <div className="skills-container">
        <div>
          <img src={Tan} alt="Tanish" className="skills-image" />
        </div>

        <div className="skills-content">
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5em",
            color: "red",
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            borderBottom: "2px red solid"
          }}>
            <b>Skills</b>
          </h2>

          {/* Skills List */}
          {[
            ["Full-Stack-Developer",99],["HTML", 95], ["CSS", 90], ["JavaScript", 92], ["J-Query", 90],
            ["React-js", 90], ["Bootstrap", 100],["Tailwind-CSS", 100],["Frontend-Developer", 100], ["Python", 90], ["Java", 90],
            ["C-language", 95], ["C++", 98], ["Git", 90], ["Github", 90],["Backend-Developer", 90],
            ["OOPS", 95], ["DSA", 80], ["Node-js",90],["Express-js",90],["Mongoose-DB",95]
          ].map(([skill, percent], index) => (
            <div key={index}>
              <h4 style={{ color: "maroon", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <b>{skill}</b>
              </h4>
              <progress value={percent} max={100}></progress> <b>{percent}%</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
