import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full  top-0 z-50 bg-[#0f0c29]/90 backdrop-blur-md shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate("/")}
        >
          Rajnish
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/about") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/services") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/services")}
          >
            Services
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/education") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/education")}
          >
            Education
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/skills") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/skills")}
          >
            Skills
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/experience") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/experience")}
          >
            Experience
          </li>
          <li
            className={`cursor-pointer hover:text-pink-500 transition duration-200 ${
              isActive("/project") ? "text-pink-500 " : ""
            }`}
            onClick={() => navigate("/project")}
          >
            Projects
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0c29]/95 px-6 pb-6 space-y-4 text-sm font-medium">
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Home
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/about") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
          >
            About
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/services") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/services");
              setIsOpen(false);
            }}
          >
            Services
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/education") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/education");
              setIsOpen(false);
            }}
          >
            Education
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/skills") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/skills");
              setIsOpen(false);
            }}
          >
            Skills
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/experience") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/experience");
              setIsOpen(false);
            }}
          >
            Experience
          </div>
          <div
            className={`cursor-pointer hover:text-pink-500 ${
              isActive("/project") ? "text-pink-500 " : ""
            }`}
            onClick={() => {
              navigate("/project");
              setIsOpen(false);
            }}
          >
            Projects
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
