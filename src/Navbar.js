import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">CSI Immanuel Church</div>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="menu-toggle" className="hamburger">☰</label>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#timing" onClick={() => setMenuOpen(false)}>Timing</a></li>
        <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
