import React from 'react';
import Tana from './tanish2.jpg';
import './education.css';

export default function Education() {
  return (
    <div>
      <h2 className="education-title">
        <b>Education</b>
      </h2>

      <div className="education-container">
        <div className="education-image-wrapper">
          <img src={Tana} alt="Tanish" className="education-image" />
        </div>

        <div className="education-content">
          <div>
            <h3 className="edu-heading"><b>(i) Bachelor in Computer Science Engineering</b></h3>
            <h4 className="edu-subheading"><b>Guru Kashi University (2023 - 2027)</b></h4>
            <p><b>Currently Pursuing</b></p>
          </div>

          <div>
            <h3 className="edu-heading"><b>(ii) 12th in Science</b></h3>
            <h4 className="edu-subheading"><b>Bihar School Examination Board (2021 - 2023)</b></h4>
            <p><b>Passed with 69%</b></p>
          </div>

          <div>
            <h3 className="edu-heading"><b>(iii) Advanced Diploma in Computer Application</b></h3>
            <h4 className="edu-subheading"><b>Global Institute of Information Technology (2021 - 2022)</b></h4>
            <p><b>Passed with 79%</b></p>
          </div>

          <div>
            <h3 className="edu-heading"><b>(iv) 10th</b></h3>
            <h4 className="edu-subheading"><b>Bihar School Examination Board (2020 - 2021)</b></h4>
            <p><b>Passed with 80%</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
