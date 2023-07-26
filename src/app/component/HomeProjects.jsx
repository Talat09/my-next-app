"use client";
import Link from "next/link";
import React, { useState } from "react";
import ProjectList from "./ProjectList";
import projects from "./projects";
const HomeProjects = () => {
  const [activeButton, setActiveButton] = useState("All");
  const filteredProjects =
    activeButton === "All"
      ? projects
      : projects.filter((project) => project.category === activeButton);
  return (
    <div>
      <div className="container mt-8 max-w-[1440px] mx-auto">
        <h1 className="text-5xl text-center text-[#E62828] mb-8">Project</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              activeButton === "All"
                ? "bg-[#E62828] text-white font-semibold"
                : "bg-gray-300 text-lg"
            }`}
            onClick={() => setActiveButton("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeButton === "React"
                ? "bg-[#E62828] text-white font-semibold"
                : "bg-gray-300 text-lg"
            }`}
            onClick={() => setActiveButton("React")}
          >
            React
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeButton === "JavaScript"
                ? "bg-[#E62828] text-white font-semibold"
                : "bg-gray-300 text-lg"
            }`}
            onClick={() => setActiveButton("JavaScript")}
          >
            JavaScript
          </button>
        </div>
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default HomeProjects;
