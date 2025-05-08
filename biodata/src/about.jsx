import React from 'react';
import Tana from './tanish2.jpg';
import Tan from './tanish.jpg';
import './about.css';


export default function About() {

    return (
        <div>
            <h2
                className="about-title"
            >
                <b>About Me</b>
            </h2>

            <div className="about-container">
                <div className="about-image-wrapper">
                    <img
                        src={Tana}
                        alt="Tanish"
                        className="about-img"
                    />
                </div>

                <div  className="about-text">
                    <p>Hi! I'm <strong>Rajnish</strong>, a passionate web developer focused on building beautiful and interactive user experiences using modern JavaScript frameworks like React.</p>
                    <p>I specialize in building dynamic, responsive web applications using <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, and <strong>React.js</strong>.</p>
                    <p>I have a background in graphic design, which led me to pursue a career in web development. After completing a full-stack web development bootcamp, I have been working on various personal and freelance projects, continuously improving my skills.</p>
                    <p>I'm driven by a love for solving complex problems and creating intuitive, user-friendly designs. I’m constantly excited by the ability to bring ideas to life through code and contribute to projects that make a difference.</p>
                    <p>I'm currently looking for opportunities to work on exciting projects that involve <strong>React</strong> and <strong>UI/UX design</strong>.</p>
                </div>

            </div>
        </div>
    );
};

export  {Tan};
