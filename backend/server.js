import express from 'express';
import { db } from './db.js'; // The db connection you already set up

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Example route to fetch data from the database
app.get('/api/data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM your_table_name'); // Replace with your table
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
