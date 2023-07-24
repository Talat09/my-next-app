/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styles from "@/app/styles/navbar.modules.css";
import { FaBars, FaTimes, FaX } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="bg-black">
      <nav className="navbar max-w-[1280px] mx-auto">
        <div className="navbarbrand">
          <Link href="/" className="">
            <p className="text-2xl md:text-2xl lg:text-4xl font-bold">
              Talat <span className="text-[#E62828]">Mahmud</span>
            </p>
          </Link>
        </div>

        <ul className={`navbarlinks  ${isOpen ? "active" : ""}`}>
          <li className="navbaritem p-2 hover:bg-[#E62828] ">
            <Link className="navbarlink text-lg " href="/">
              Home
            </Link>
          </li>
          <li className="navbaritem p-2 hover:bg-[#E62828]">
            <Link className="navbarlink text-lg" href="/services">
              Services
            </Link>
          </li>
          <li className="navbaritem p-2 hover:bg-[#E62828]">
            <Link className="navbarlink text-lg" href="/projects">
              Projects
            </Link>
          </li>
          <li className="navbaritem p-2 hover:bg-[#E62828]">
            <Link className="navbarlink text-lg" href="/skills">
              Skills
            </Link>
          </li>
          <li className="navbaritem p-2 hover:bg-[#E62828]">
            <Link className="navbarlink text-lg" href="/about">
              About
            </Link>
          </li>
          <li className="navbaritem p-2 hover:bg-[#E62828]">
            <Link className="navbarlink text-lg" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbartoggle " onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </section>
  );
};

export default Header;
