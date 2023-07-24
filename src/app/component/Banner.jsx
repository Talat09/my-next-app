/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    bannerRef.current.classList.add("banner-animate");
  }, []);
  return (
    <>
      <div className="">
        <div ref={bannerRef} className="max-w-[1440px] mx-auto p-4 mt-8">
          <div className="flex justify-between items-center  flex-col lg:flex-row-reverse lg:mx-16 md:mx-16 sm:mx-0  banner-content">
            <div className="info">
              <p className="text-base text-[#E62828] font-semibold font-subtitle">
                <Typewriter
                  words={["MERN Stack Developer", "Frontend Developer"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <h1 className="text-[42px] font-bold font-title py-2 text-white">
                Talat <span className="text-[#E62828] ">Mahmud</span>
              </h1>
              <p className="text-sm font-subtitle font-semibold py-2 text-[#5e5c5c] tracking-wide">
                I have a passion for building dynamic web applications using
                cutting-edge <br />
                technologies, and I am dedicated to creating efficient and
                user-friendly solutions.
              </p>
              <div className="sm:block">
                <button className=" mt-4 border-2 border-white  rounded-full text-[#d1cfcf] w-28 h-12 font-semibold font-title hover:bg-[#E62828] me-6">
                  Contact
                </button>
                <button className="border-2  mt-4 border-white w-36 h-12  rounded-full text-[#d1cfcf] font-semibold font-title hover:bg-[#E62828]">
                  Download CV
                </button>
              </div>
            </div>
            <div className="avatar">
              <div className="w-full rounded-full ">
                <Image
                  src="/cover.png"
                  alt="Cover Image"
                  className=" rounded-full "
                  width={600}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
