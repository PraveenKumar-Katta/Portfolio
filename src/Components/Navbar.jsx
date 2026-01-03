import React, { useState } from "react";
import { useElements } from "../Context/ContextAPI";
import { Menu,X } from "lucide-react";


const Navbar = () => {
  const { contactRef, projectRef, aboutRef, skillsRef } = useElements();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFocus = (element) => {
    element.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  const downloadResume = (e) => {
    e.preventDefault();
    const fileUrl = "/Praveen_Kumar_Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Praveen_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open(fileUrl, "_blank");
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        <span className="font-bold text-pink-600 text-2xl">PK</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xl">
          <p onClick={() => handleFocus(aboutRef)} className="hover:text-pink-500 cursor-pointer">About</p>
          <p onClick={() => handleFocus(skillsRef)} className="hover:text-pink-500 cursor-pointer">Skills</p>
          <p onClick={() => handleFocus(projectRef)} className="hover:text-pink-500 cursor-pointer">Projects</p>
          <p onClick={downloadResume} className="hover:text-pink-500 cursor-pointer">Resume</p>
          <p onClick={() => handleFocus(contactRef)} className="hover:text-pink-500 cursor-pointer">Contact</p>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X/> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-black text-xl gap-4 py-4 md:hidden">
          <p onClick={() => handleFocus(aboutRef)} className="hover:text-pink-500 cursor-pointer">About</p>
          <p onClick={() => handleFocus(skillsRef)} className="hover:text-pink-500 cursor-pointer">Skills</p>
          <p onClick={() => handleFocus(projectRef)} className="hover:text-pink-500 cursor-pointer">Projects</p>
          <p onClick={downloadResume} className="hover:text-pink-500 cursor-pointer">Resume</p>
          <p onClick={() => handleFocus(contactRef)} className="hover:text-pink-500 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
