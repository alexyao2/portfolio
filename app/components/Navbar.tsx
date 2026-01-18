import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: string;
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/interests" onClick={() => setIsMenuOpen(false)}>Interests</Link></li>
        
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {currentTheme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>

      <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}