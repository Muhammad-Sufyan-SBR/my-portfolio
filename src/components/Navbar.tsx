// components/Navbar.tsx
"use client";

import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <button
        onClick={toggleSidebar}
        className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ☰
      </button>
    </div>
  );
};

export default Navbar;