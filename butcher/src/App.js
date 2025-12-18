import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import About from './About';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', age: 20, course: 'Math' },
    { id: 2, name: 'Bob', age: 22, course: 'Physics' },
  ]);

  const addStudent = (student) => {
    const id = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents(prev => [...prev, { ...student, id }]);
  };

  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent onAdd={addStudent} />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
