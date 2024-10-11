// project/backend/services/studentService.js

import * as studentModel from '../models/studentModel.js';

export const getAllStudentsService = async () => {
  return await studentModel.getAllStudents();
};

export const createStudentService = async (studentData) => {
  return await studentModel.createStudent(studentData);
};
