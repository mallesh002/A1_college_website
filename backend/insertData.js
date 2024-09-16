import { db } from './db.js';

const insertData = async () => {
  const query = `
    INSERT INTO students (name, age, department, email)
    VALUES
    ('John Doe', 20, 'Computer Science', 'john.doe@college.com'),
    ('Jane Smith', 22, 'Mathematics', 'jane.smith@college.com');
  `;

  try {
    await db.query(query);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    db.end(); // Close the connection
  }
};

insertData();
