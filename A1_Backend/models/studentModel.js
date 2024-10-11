// project/backend/models/studentModel.js

import { db } from '../db.js';

export const getAllStudents = async () => {
  try {
    const result = await db.query('SELECT * FROM students');
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching students data: ' + error.message);
  }
};

export const createStudent = async (studentData) => {
  const { name, age, department, email } = studentData;
  try {
    const result = await db.query(
      'INSERT INTO students (name, age, department, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, age, department, email]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating student: ' + error.message);
  }
};
