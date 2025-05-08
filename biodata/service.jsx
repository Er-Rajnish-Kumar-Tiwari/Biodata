import React from 'react';
import './services.css'; 
import { Tan } from './src/about';

export default function Services() {
  return (
    <div>

      <h2 className="services-title">
        <b>Services</b>
      </h2>

      <div className="services-container">
        <div className="services-image-wrapper">
          <img src={Tan} alt="Tanish" className="services-image" />
        </div>

        <div className="services-content">
          <div>
            <h3><b>Front-End Development</b></h3>
            <p>I build responsive and dynamic user interfaces using modern JavaScript frameworks like React, ensuring smooth interactions and a delightful user experience.</p>
          </div>

          <div>
            <h3><b>Back-End Development</b></h3>
            <p>I develop server-side applications using Node.js, Express, and databases such as MongoDB and SQL to create scalable back-end systems for your web applications.</p>
          </div>

          <div>
            <h3><b>UI/UX Design</b></h3>
            <p>I create intuitive, user-centered designs, focusing on improving the user experience through wireframes, prototypes, and interaction design.</p>
          </div>

          <div>
            <h3><b>Technologies I Work With:</b></h3>
            <ul>
              <li><b>JavaScript/React</b> - Modern UI development</li>
              <li><b>Node.js</b> - Server-side development</li>
              <li><b>MongoDB</b> - SQL database</li>
              <li><b>HTML5/CSS3</b> - Responsive design and layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
