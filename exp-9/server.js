const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/school_db")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Create Schema
const studentSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  department: String
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// Home route
app.get("/", (req, res) => {
  res.send("Node.js + Express.js + Mongoose + MongoDB");
});

// Add student
app.get("/add", async (req, res) => {
  try {
    const student = new Student({
      fullName: "Anugrah",
      age: 20,
      department: "Information Technology"
    });

    await student.save();
    res.send("Student added successfully!");
  } catch (error) {
    res.status(500).send("Error adding student: " + error.message);
  }
});

// Display students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send("Error fetching students: " + error.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});