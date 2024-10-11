// server.js

import express from 'express';
import { db } from './db.js';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json()); // This line is essential to parse JSON requests

// Route to fetch students data
app.get('/api/students', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM students');
    res.json(result.rows);  // Send data as JSON
    console.log("fetched data", result);
  } catch (error) {
    console.error('Error fetching students data:', error);
    res.status(500).send('Server error');
  }
});

// Route to create a new student
app.post('/api/students', async (req, res) => {
  const { name, age, department, email } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO students (name, age, department, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, age, department, email]
    );
    res.status(201).json(result.rows[0]); // Return the newly created student
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
