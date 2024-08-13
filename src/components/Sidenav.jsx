import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineX,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import "../styles.css";
import { useTranslation } from "react-i18next";
import "../i18n";
import WorldFlags from "react-world-flags";

function Sidenav() {
  const { i18n } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <button
            onClick={changeLanguage}
            className="flag-button absolute top-5 left-4 z-[99] md:hidden cursor-pointer"
          >
            <WorldFlags
              code={i18n.language === "en" ? "ES" : "GB"}
              style={{ height: "30px", width: "auto", objectFit: "cover" }} // Ajuste inline
              alt={i18n.language === "en" ? "Español" : "English"}
            />
          </button>
      <AiOutlineMenu
        onClick={handleNav}
        size={30}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer text-neutral-100"
      />
      {nav && (
        <div className="fixed w-full h-screen bg-neutral-950 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 text-neutral-50">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4 text-neutral-50">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4 text-neutral-50">About me</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center text-neutral-50 items-center rounded-full shadow-lg shadow-indigo-900 bg-neutral-900 m-4 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 text-neutral-50">Contact</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[20%] z-10">
        <div className="flex flex-col py-4 pr-3 bg-indigo-950/30 rounded-r-3xl">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-lime-400 group"
          >
            <AiOutlineHome size={20} className="text-neutral-950 group-hover:text-lime-700 duration-200" />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-lime-400 group"
          >
            <GrProjects size={20} className="text-neutral-950 group-hover:text-lime-700 duration-200" />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-lime-400 group"
          >
            <BsPerson size={20} className="text-neutral-950 group-hover:text-lime-700 duration-200" />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-lime-400 group"
          >
            <AiOutlineMail size={20} className="text-neutral-950 group-hover:text-lime-700 duration-200" />
          </a>
          <button
            onClick={changeLanguage}
            className="flag-button rounded-full shadow-lg bg-neutral-100 shadow-indigo-700 mx-2 my-4 py-4 px-[0.85rem] cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-lime-400"
          >
            <WorldFlags
              code={i18n.language === "en" ? "ES" : "GB"}
              style={{ height: "16px", width: "24px", objectFit: "cover" }} // Ajuste inline
              alt={i18n.language === "en" ? "Español" : "English"}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
