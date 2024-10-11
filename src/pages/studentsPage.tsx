// pages/StudentsPage.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  age: number;
  department: string;
  email: string;
}

const StudentsPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: "",
    age: 0,
    department: "",
    email: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
      console.log("fetched data:", response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", newStudent);
      fetchStudents(); // Refresh the student list
      setNewStudent({ id: 0, name: "", age: 0, department: "", email: "" }); // Reset the form
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newStudent.name}
          placeholder="Name"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="age"
          value={newStudent.age}
          placeholder="Age"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          value={newStudent.department}
          placeholder="Department"
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          value={newStudent.email}
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentsPage;
