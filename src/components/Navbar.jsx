// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Assuming you have some styles for the Navbar

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (label) => {
    console.log(`${label} clicked`)
    // or open modal, trigger animation, etc.
  }

  return (
    <header className="flex items-center justify-between px-6 md:px-28 py-4 shadow-md bg-white sticky top-0 z-50 nav-fixed">
      <div className="mb-0 md:mb-0 md:mr-12 flex-shrink-0">
        <Link to="/">
          <img className="home-nav-logo" src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/rotatex-site-logo.png?updatedAt=1752602839893" />
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 nav-text">Product</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 nav-text">Company</a>

        <Link
          to="/resources-tools"
          className="text-gray-700 hover:text-blue-600 nav-text"
          onClick={() => handleClick('Resources & Tools')}
        >
          Resources & Tools
        </Link>

        <Link
          to="/steps"
          className="text-gray-700 hover:text-blue-600 nav-text"
          onClick={() => handleClick('Steps')}
        >
          Steps to How?
        </Link>

        <a href="#" className="text-gray-700 hover:text-blue-600 nav-text">FAQs</a>
      </nav>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl md:ml-4 hover:bg-blue-700 hidden md:block"
        onClick={() => navigate('/waitlist')}
      >
        Join Waitlist
      </button>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {/* Hamburger SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
          <path d="M2.44531 1.76416H12.4453" stroke="#0C7BEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.44531 9.76416H22.4453" stroke="#0C7BEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.4453 17.7642L22.4453 17.7642" stroke="#0C7BEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden animate-fade-in z-40">
          <a href="#" className="text-gray-700 hover:text-blue-600 py-2 w-full text-center nav-text">Product</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 py-2 w-full text-center nav-text">Company</a>

          <Link
            to="/resources-tools"
            className="text-gray-700 hover:text-blue-600 py-2 w-full text-center nav-text"
            onClick={() => handleClick('Resources & Tools')}
          >
            Resources & Tools
          </Link>

          <Link
            to="/steps"
            className="text-gray-700 py-2 w-full text-center nav-text"
            onClick={() => handleClick('Steps')}
          >
            Steps to How?
          </Link>
          <a href="#" className="text-gray-700 hover:text-blue-600 py-2 w-full text-center nav-text">FAQs</a>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 w-11/12 max-w-xs hover:bg-blue-700 nav-text"
            onClick={() => navigate('/waitlist')}
          >
            Join Waitlist
          </button>
        </div>
      )}
    </header>
  );
}