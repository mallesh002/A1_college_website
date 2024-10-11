// project/backend/server.js

import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoute.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Use student routes
app.use('/api/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
