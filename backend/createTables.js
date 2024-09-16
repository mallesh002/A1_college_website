import { db } from './db.js';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      age INTEGER,
      department VARCHAR(50),
      email VARCHAR(100) UNIQUE
    );
  `;

  try {
    await db.query(query);
    console.log('Table "students" created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    db.end(); // Close the connection
  }
};

createTable();
