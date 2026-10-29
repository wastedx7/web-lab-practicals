import { useState } from "react";

// Component using Props
function Student({ name, course, college }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>College: {college}</p>
    </div>
  );
}

// Component using State
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter using State</h2>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div>
      <h1>React Props and State</h1>

      <Student
        name="Anugrah Umarvanshi"
        course="TE IT"
        college="Engineering College"
      />

      <Counter />
    </div>
  );
}

export default App;