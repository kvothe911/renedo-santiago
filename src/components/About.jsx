import React from "react";
import "../i18n"
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
  return (
    <div className="relative bg-black w-full flex justify-center">
      <div className="absolute w-full h-full transform opacity-55 background"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-80-to-transparent "></div>
      <div
        id="about"
        className="relative max-w-[1040px] flex flex-col top-0 m-auto mx-10 my-16 sm:px-20"
      >
        <h2 className="text-lime-400 text-3xl md:text-5xl font-bold pt-16 mb-12 md:mb-16 lg:mb-0">
          {t("about-me")}
        </h2>
        <h3 className="text-neutral-400 text-xl md:text-2xl font-bold sm:pt-0 lg:pt-6 mb-12 md:mb-16 lg:mb-0">
          {t("information")}
        </h3>
        <div className="items-start">
          <h3 className="text-neutral-100 md:text-3xl text-2xl text-center font-bold sm:pt-0 lg:pt-12 pb-10 lg:pb-0">
            {t("know-about-me")}
          </h3>
          <div className="lg:grid grid-cols-2 items-center md:flex md:flex-col md:mt-0 md:items-center">
            <p className="text-neutral-100 text-base sm:text-xl">
              {t("description-1-about-me")}
              <br /> <br />
              {t("description-2-about-me")}
            </p>
            <div className="flex justify-center w-full md:mt-4 lg:mt-0">
              <img
                className="scale-75 rotate-0 max-w-[50%] max-h-[50%] lg:max-w-full lg:max-h-full"
                src="https://i.imgur.com/D5M57h2.jpeg"
                alt=""
              />
            </div>
          </div>
          <h3 className="text-neutral-100 md:text-3xl text-2xl text-center font-bold sm:pt-0 lg:pt-12 pb-10">
            {t("skills")}
          </h3>
          <div>
            <ul className="text-neutral-100 text-lg flex flex-wrap justify-center gap-10 ">
              <li className="px-4 py-2 rounded-md bg-indigo-900">HTML</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">CSS</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">JavaScript</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">React</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">Vite</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">Tailwind</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">NodeJs</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">Express</li>
              <li className="px-4 py-2 rounded-md bg-indigo-900">SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
