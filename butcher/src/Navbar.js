import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/add-student" className={({isActive}) => isActive ? 'active' : ''}>Add Student</NavLink></li>
        <li><NavLink to="/students" className={({isActive}) => isActive ? 'active' : ''}>Student List</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
}
