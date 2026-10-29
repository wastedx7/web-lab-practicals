# Advanced React Single Page Application (SPA)

## 1. Project Structure

```text
advanced-react-spa/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Students.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 2. Create the React Project

Make sure Node.js and npm are installed.

Check their versions:

```bash
node --version
npm --version
```

Create the project using Vite:

```bash
npm create vite@latest advanced-react-spa -- --template react
cd advanced-react-spa
npm install
npm install react-router-dom
```

Create the `components` folder inside `src` if it does not already exist.

## 3. Source Code

### File 1: `src/components/Navbar.jsx`

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student SPA</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
```

### File 2: `src/Home.jsx`

```jsx
function Home() {
  return (
    <div className="page">
      <h1>Welcome to Student SPA</h1>

      <p>
        This is a Single Page Application created using React.
      </p>

      <p>
        Navigate through the menu without refreshing the page.
      </p>
    </div>
  );
}

export default Home;
```

### File 3: `src/Students.jsx`

```jsx
import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    "Rahul",
    "Priya",
    "Amit",
  ]);

  const [name, setName] = useState("");

  function addStudent() {
    const trimmedName = name.trim();

    if (trimmedName !== "") {
      setStudents([...students, trimmedName]);
      setName("");
    }
  }

  return (
    <div className="page">
      <h1>Students</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
```

### File 4: `src/About.jsx`

```jsx
function About() {
  return (
    <div className="page">
      <h1>About</h1>

      <p>
        This application demonstrates an advanced React
        Single Page Application.
      </p>

      <h3>Technologies Used</h3>

      <ul className="technology-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>React Router</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

export default About;
```

### File 5: `src/Contact.jsx`

```jsx
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    alert("Message submitted successfully!");
    setMessage("");
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
```

### File 6: `src/App.jsx`

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Home";
import Students from "./Students";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### File 7: `src/index.css`

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
  color: #222;
}

.navbar {
  background-color: #222;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.navbar h2 {
  margin: 0;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}

.page {
  padding: 40px 20px;
  text-align: center;
}

input {
  padding: 10px;
  margin: 10px;
  width: min(250px, 90%);
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #222;
  color: white;
}

button:hover {
  background-color: #444;
}

.student-list,
.technology-list {
  padding: 0;
}

.student-list li,
.technology-list li {
  list-style: none;
  padding: 8px;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    padding: 15px;
  }

  .nav-links {
    justify-content: center;
  }

  .page {
    padding: 25px 15px;
  }
}
```

### File 8: `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## 4. Configure `package.json`

The Vite-generated `package.json` already contains the necessary scripts and dependencies after installation. Ensure it includes the following configuration:

```json
{
  "name": "advanced-react-spa",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest"
  }
}
```

If you replace the generated `package.json` with this example, run `npm install` again to synchronize the installed dependencies and lock file.

## 5. Configure `vite.config.js`

The Vite-generated configuration should work. A standard React configuration is:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

## 6. Configure `index.html`

Ensure the project root contains an `index.html` file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student SPA</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## 7. Run the Application

Open a terminal in the project directory:

```bash
cd advanced-react-spa
npm install
npm run dev
```

Vite will display a local URL, usually:

```text
http://localhost:5173/
```

Open the URL in your browser.

## 8. Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 9. Expected Result

- **Home:** Displays a welcome message.
- **Students:** Displays Rahul, Priya, and Amit, and lets you add student names.
- **About:** Displays the application description and technologies used.
- **Contact:** Provides a message input and submission alert.
- **Navigation:** Switches between pages using React Router without a full-page reload.

## 10. Conclusion

The Advanced React Single Page Application was created using React, Vite, React Router, JavaScript, and CSS. The application demonstrates client-side routing, reusable components, state management with `useState`, and form handling.
