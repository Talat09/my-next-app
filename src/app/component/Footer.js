/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <section>
      <div className="py-8 max-w-[1440px] mx-auto">
        <h1 className="text-center text-white text-[42px] font-bold font-title">
          Talat <span className="text-[#E62828]">Mahmud</span>
        </h1>
        <p className="w-full font-subtitle text-[#333] text-center">
          I'm a skilled MERN Stack Developer with a passion for creating
          immersive web applications. <br />
          With years of experience and a natural curiosity for new technologies,
          I thrive in collaborative
          <br /> environments and am always eager to take on new challenges.
        </p>
        <div className="social-icons flex justify-center items-center mt-6">
          <Link href="https://www.facebook.com/profile.php?id=100010332459337">
            <BsFacebook className="text-[#696868]  text-4xl me-5"></BsFacebook>
          </Link>
          <Link href="">
            <BsInstagram className="text-[#696868]  text-4xl me-5"></BsInstagram>
          </Link>
          <Link href="https://www.linkedin.com/in/talat09/">
            <BsLinkedin className="text-[#696868] text-4xl me-5"></BsLinkedin>
          </Link>
          <Link href="https://github.com/Talat09">
            <BsGithub className="text-[#696868]  text-4xl"></BsGithub>
          </Link>
        </div>
      </div>

      <hr />
      <div className="max-w-[1440px]  flex  flex-wrap-reverse justify-between py-4 px-2 mx-auto">
        <p className="text-white font-subtitle text-base my-2">
          Copyright <span className="text-[#E62828]">&copy;</span>2023 Talat
          <span className="text-[#E62828]">Developer</span>
        </p>
        <div className="flex shortcut-menu text-white my-2">
          <Link href="/services" className="me-3">
            Services
          </Link>
          <Link href="/projects" className="me-3">
            Projects
          </Link>
          <Link href="/skills" className="me-3">
            Skills
          </Link>
          <Link href="/about" className="me-3">
            Skills
          </Link>
          <Link href="/about">Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
