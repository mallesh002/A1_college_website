import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students');
        const data = await response.json();
        setStudents(data);  
        console.log(data)
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.department} ({student.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
