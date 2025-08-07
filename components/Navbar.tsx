import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 to-green-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-white">AI Career Companion</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-blue-100 hover:text-white font-medium transition">Home</Link>
          <Link to="/cv-builder" className="text-blue-100 hover:text-white font-medium transition">AI CV & Cover Letter Builder</Link>
          <a href="#problem" className="text-blue-100 hover:text-white font-medium transition">Problem</a>
          <a href="#solution" className="text-blue-100 hover:text-white font-medium transition">Solution</a>
          <a href="#impact" className="text-blue-100 hover:text-white font-medium transition">Impact</a>
          <Link to="/cv-builder" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition text-base">Get Started</Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-blue-900 to-green-900 border-t border-blue-800 px-4 pb-4 pt-2 flex flex-col gap-2 shadow">
          <a href="#home" className="text-blue-100 py-2 px-2 rounded hover:bg-blue-800 font-medium transition" onClick={() => setOpen(false)}>Home</a>
          <a href="#problem" className="text-blue-100 py-2 px-2 rounded hover:bg-blue-800 font-medium transition" onClick={() => setOpen(false)}>Problem</a>
          <a href="#solution" className="text-blue-100 py-2 px-2 rounded hover:bg-blue-800 font-medium transition" onClick={() => setOpen(false)}>Solution</a>
          <a href="#impact" className="text-blue-100 py-2 px-2 rounded hover:bg-blue-800 font-medium transition" onClick={() => setOpen(false)}>Impact</a>
          <a href="#story" className="text-blue-100 py-2 px-2 rounded hover:bg-blue-800 font-medium transition" onClick={() => setOpen(false)}>Success Story</a>
          <a href="#cta" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition text-base text-center" onClick={() => setOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
}
