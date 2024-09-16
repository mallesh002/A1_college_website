import express from 'express';
import { db } from './db.js';
import cors from 'cors';

const app = express();
const port = 5000;

// Enable CORS to allow frontend to make API requests
app.use(cors());

// Route to fetch students data
app.get('/api/students', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM students');
    res.json(result.rows);  // Send data as JSON
  } catch (error) {
    console.error('Error fetching students data:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
