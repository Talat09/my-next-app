import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./ProjectList.css";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const screenHeight = window.innerHeight;
      const cardPosition = cardRef.current.getBoundingClientRect().top;

      if (currentScrollPos > cardPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href={project.Live_Link} className="text-white">
      <div
        ref={cardRef}
        className={`w-full h-72 mb-3 rounded-lg bg-black project-card ${
          scrollDirection === "down" ? "fade-in" : "fade-out"
        }`}
      >
        <Image
          src={project.picture}
          alt="Project Image"
          className="p-1 rounded-lg flex mx-auto"
          width={350}
          height={250}
          priority
        />
        <button className="px-8 py-2 flex bg-red-600 justify-center items-center mx-auto text-center rounded-lg">
          Live Link
          <FaLocationArrow className="ms-2"></FaLocationArrow>
        </button>
      </div>
    </Link>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mx-16 md:mx-8 sm:mx-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
