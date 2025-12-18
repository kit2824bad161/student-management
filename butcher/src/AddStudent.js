import React, { useState } from 'react';

export default function AddStudent({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), age: Number(age) || 0, course: course.trim() });
    setName(''); setAge(''); setCourse('');
  };

  return (
    <section>
      <h2>Add Student</h2>
      <form onSubmit={submit} className="form">
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Age
          <input value={age} onChange={e => setAge(e.target.value)} type="number" />
        </label>
        <label>
          Course
          <input value={course} onChange={e => setCourse(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
