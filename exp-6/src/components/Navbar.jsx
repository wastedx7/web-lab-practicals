import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student SPA</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
