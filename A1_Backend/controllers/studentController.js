// project/backend/controllers/studentController.js

import * as studentService from '../services/studentService.js';
import { studentSchema } from '../schema/studentSchema.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudentsService();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Server error');
  }
};

export const createStudent = async (req, res) => {
  const { error } = studentSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const newStudent = await studentService.createStudentService(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send('Server error');
  }
};
