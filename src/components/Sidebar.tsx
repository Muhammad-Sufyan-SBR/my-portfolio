// components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-40 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
      style={{ boxShadow: "2px 10px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 left-4 text-white text-xl"
        onClick={toggleSidebar}
      >
        X
      </button>

      {/* Sidebar Links */}
      <ul className="mt-16 space-y-6 p-4">
        <li>
          <a href="#home" className="hover:text-gray-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-500">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;