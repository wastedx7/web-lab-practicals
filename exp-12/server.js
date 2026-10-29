const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Temporary student records
let students = [
  { id: 1, name: "Amit", course: "IT" },
  { id: 2, name: "Priya", course: "Computer" }
];

// GET: Display all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// GET: Display a student by ID
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

// POST: Add a new student
app.post("/students", (req, res) => {
  const { name, course } = req.body;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof course !== "string" || !course.trim()
  ) {
    return res.status(400).json({
      message: "Name and course are required"
    });
  }

  const newId = students.length
    ? Math.max(...students.map((s) => s.id)) + 1
    : 1;

  const newStudent = {
    id: newId,
    name: name.trim(),
    course: course.trim()
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT: Update a student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, course } = req.body;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof course !== "string" || !course.trim()
  ) {
    return res.status(400).json({
      message: "Name and course are required"
    });
  }

  student.name = name.trim();
  student.course = course.trim();

  res.status(200).json({
    message: "Student updated successfully",
    student: student
  });
});

// DELETE: Remove a student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});