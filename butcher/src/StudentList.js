import React from 'react';

export default function StudentList({ students }) {
  return (
    <section>
      <h2>Student List</h2>
      {students.length ? (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students yet.</p>
      )}
    </section>
  );
}
