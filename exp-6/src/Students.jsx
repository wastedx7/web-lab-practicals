import { useState } from "react";

function Students() {
  const [students, setStudents] = useState(["Rahul", "Priya", "Amit"]);
  const [name, setName] = useState("");

  function addStudent() {
    const trimmedName = name.trim();

    if (trimmedName !== "") {
      setStudents((currentStudents) => [...currentStudents, trimmedName]);
      setName("");
    }
  }

  return (
    <div className="page">
      <h1>Students</h1>

      <div className="student-form">
        <label htmlFor="student-name">Student name</label>
        <div>
          <input
            id="student-name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="button" onClick={addStudent}>
            Add Student
          </button>
        </div>
      </div>

      <h2>Student List</h2>

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={`${student}-${index}`}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
