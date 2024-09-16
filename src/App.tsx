import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>College Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li> // Replace column_name with the actual column name
        ))}
      </ul>
    </div>
  );
}

export default App;
