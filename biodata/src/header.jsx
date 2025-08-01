import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

export default function Header() {
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? 'link active' : 'link';

  return (
    <div className='cont'>
      <ul className='u1'>
        <li><Link to='/' className={getLinkClass('/')}>Home</Link></li>
        <li><Link to='/About' className={getLinkClass('/About')}>About</Link></li>
        <li><Link to='/Services' className={getLinkClass('/Services')}>Services</Link></li>
        <li><Link to='/Education' className={getLinkClass('/Education')}>Education</Link></li>
        <li><Link to='/Skill' className={getLinkClass('/Skill')}>Skills</Link></li>
        <li><Link to='/experience' className={getLinkClass('/experience')}>Experience</Link></li>
        <li><Link to='/Projects' className={getLinkClass('/Projects')}>Projects</Link></li>
      </ul>
    </div>
  );
}
