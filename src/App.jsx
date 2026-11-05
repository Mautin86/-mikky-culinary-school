
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import mikkyLogo from "./assets/mikkylogo.jpeg";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseOutline from "./pages/CourseOutline";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contact";
import Apply from "./pages/Apply";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVBAR */}
        <header className="navbar">

          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src={mikkyLogo}
              alt="Mikky's Culinary School Logo"
            />

            <div className="logo-text">
              <h2>MIKKY'S CULINARY SCHOOL</h2>
              <p>Master the Art. Lead the Experience.</p>
            </div>
          </Link>

          {/* HAMBURGER BUTTON */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAVIGATION */}
          <nav className={menuOpen ? "nav-open" : ""}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/courses" onClick={closeMenu}>
              Courses
            </Link>

            <Link to="/course-outline" onClick={closeMenu}>
              Course Outline
            </Link>

            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>

            {/* SOCIAL MEDIA */}
<section className="social-section">
  <div className="social-content">
    <p className="section-label">FOLLOW US</p>

    <h2>Stay Connected With Mikky’s</h2>

    <p>
      Follow us for culinary inspiration, student activities, recipes,
      and updates from Mikky’s Culinary School.
    </p>

    <div className="social-links">
      <a
        href="https://www.instagram.com/Mikkyspace"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
      >
        Instagram <span>@Mikkyspace</span>
      </a>

      <a
        href="https://www.facebook.com/Mikkyspace"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn facebook"
      >
        Facebook <span>@Mikkyspace</span>
      </a>
    </div>
  </div>
</section>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          {/* APPLY BUTTON */}
          <Link
            to="/apply"
            className="nav-button"
            onClick={closeMenu}
          >
            Apply Now
          </Link>

        </header>

        {/* PAGES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-outline" element={<CourseOutline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>

        {/* FOOTER */}
        <footer>
          <div>
            <h3>MIKKY’S CULINARY SCHOOL</h3>
            <p>Master the Art. Lead the Experience.</p>
          </div>

          <p>
            © 2026 MIKKY’S CULINARY SCHOOL. All rights reserved.
          </p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;

