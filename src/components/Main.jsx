import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import "../styles.css";
import { useTranslation } from "react-i18next";
import "../i18n";
import RandomTextEffect from "./RandomTextEffect";
import { useAnimation } from "./AnimationContext";
import CVButton from "./CVButton";

function Main() {
  const { t } = useTranslation();
  const { triggerAnimation } = useAnimation(); // Obtén el triggerAnimation del contexto
  const [isHovered, setIsHovered] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState(null); // Manejo del timeout

  useEffect(() => {
    if (triggerAnimation) {
      setIsHovered(true); // Activa la animación al cambiar el idioma
      if (animationTimeout) {
        clearTimeout(animationTimeout); // Limpia el timeout anterior si existe
      }
      const timeout = setTimeout(() => {
        setIsHovered(false); // Desactiva la animación después de 2 segundos
      }, 2000);

      setAnimationTimeout(timeout); // Guarda el timeout para limpiar más tarde
    }
  }, [triggerAnimation]);

  const handleMouseEnter = () => {
    if (!isHovered) {
      // Solo activa el hover si no está activado
      setIsHovered(true);
      const timeout = setTimeout(() => {
        setIsHovered(false); // Desactiva el hover después de 2 segundos
      }, 1000);
      setAnimationTimeout(timeout); // Guarda el timeout para limpiar más tarde
    }
  };

  return (
    <div id="main" className="bg-black">
      <div className="w-full min-h-svh object-cover transform scale-x-[-1] opacity-70 background"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-bottom-to-transparent"></div>
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[880px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <p className="text-neutral-100 sm:text-3xl text-xl">
            <RandomTextEffect
              text={t("welcome")}
              triggerAnimation={triggerAnimation}
            />
          </p>
          <h1
            className="text-lime-400 text-3xl sm:text-5xl font-bold pt-6"
            onMouseEnter={handleMouseEnter}
          >
            <RandomTextEffect
              text="<santiago renedo>"
              triggerAnimation={isHovered}
            />
          </h1>
          <h2 className="text-neutral-100 text-xl sm:text-3xl pt-8">
            <RandomTextEffect
              text={t("description")}
              triggerAnimation={triggerAnimation}
            />
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-10 gap-6 pt-10 m-0 items-center">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/santiago-renedo-527752303/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size={25}
                  className="text-neutral-100 cursor-pointer hover:scale-110 hover:text-lime-400 transition-transform duration-300"
                />
              </a>
              <a
                href="https://github.com/kvothe911"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={25}
                  className="text-neutral-100 cursor-pointer hover:scale-110 hover:text-lime-400 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/santiago_renedo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={25}
                  className="text-neutral-100 cursor-pointer hover:scale-110 hover:text-lime-400 transition-transform duration-300"
                />
              </a>
            </div>
            <CVButton />
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
