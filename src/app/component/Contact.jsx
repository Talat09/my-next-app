"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "./Contact.css";
const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    contactRef.current.classList.add("contact-animate");
  }, []);
  return (
    <div ref={contactRef} className="max-w-[1440px] mx-auto mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center contact-content">
        <div className="left ">
          <div>
            <h1 className="text-[#E62828] text-5xl font-bold">CHITTAGONG</h1>
            <h2 className="text-white text-5xl font-semibold mt-4">
              BANGLADESH
            </h2>
          </div>
          <div className="contact-info text-white mt-8">
            <p className="text-2xl">talat1.web@gmail.com</p>
            <p className="text-2xl mt-4 ">
              <span className="text-[#E62828] ">+880 </span>1781439125
            </p>
          </div>
        </div>
        <div className="right">
          <Image
            src="/map.png"
            alt="Cover Image"
            className=" text-red-500 "
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
