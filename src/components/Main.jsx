import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import "../styles.css";
import { useTranslation } from "react-i18next";
import "../i18n"
import RandomTextEffect from "./RandomTextEffect";

function Main() {

    const {t} = useTranslation()
    

  return (
    <div id="main" className="bg-black">
      <div className="w-full min-h-svh object-cover transform scale-x-[-1] opacity-70 background"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-bottom-to-transparent"></div>
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[880px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <p className="text-neutral-100 sm:text-3xl text-xl">{t('welcome')}</p>
          <RandomTextEffect text="<santiago renedo>" />
          <h2 className="text-neutral-100 text-xl sm:text-3xl pt-8">
            {t('description')}
          </h2>
          <div className="flex gap-6 pt-10">
            
            <a
              href="https://www.linkedin.com/in/santiago-renedo-527752303/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-lime-400 duration-500 move"
              />
            </a>
            <a
              href="https://github.com/kvothe911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-lime-400 duration-500 move"
              />
            </a>
            <a
              href="https://www.instagram.com/santiago_renedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-lime-400 duration-500 move"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <a
          href="#projects"
          className="text-neutral-100 absolute bottom-4 left-1/2 cursor-pointer"
        >
          <FaArrowDownLong size={20} />
        </a>
      </div>
    </div>
  );
}

export default Main;
