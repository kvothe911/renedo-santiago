import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineX } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import "../styles.css";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        size={20}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer text-neutral-100"
      />
      {nav && (
        <div className="fixed w-full h-screen bg-neutral-950 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 text-neutral-50">Home</span>
          </a>
          <a onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4 text-neutral-50">Projects</span>
          </a>
          <a onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4 text-neutral-50">About me</span>
          </a>
          <a onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 text-neutral-50">Contact</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col py-4 pr-3 bg-indigo-950/30 rounded-r-3xl">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} className="text-neutral-950" />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} className="text-neutral-950" />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} className="text-neutral-950" />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} className="text-neutral-950" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
