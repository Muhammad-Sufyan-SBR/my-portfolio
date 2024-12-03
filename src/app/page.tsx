// src/app/page.tsx
"use client"; // Ensuring this is a client-side component for useState to work

import React, { useState } from "react";
import Navbar from "@/components/Navbar"; // Import Navbar component
import Sidebar from "@/components/Sidebar"; // Import Sidebar component
import Scrollicon from "@/components/ScrollIcon"; // Import Scrollicon if used
import About from "@/pages/about";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-full">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="relative w-full h-screen bg-transparent overflow-hidden"></div>

      {/* Fullscreen Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/Sufyan.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Name */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Muhammad Sufyan</h1>
        </div>
      </div>
      {/* Scroll Icon */}
      <Scrollicon />
      <About />
    </div>
  );
}