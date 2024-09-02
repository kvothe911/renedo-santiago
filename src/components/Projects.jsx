import React from "react";
import ProjectCard from "./ProjectCard";
import kombuchanImg from "../assets/KombuchanCard.jpg";
import toDoImg from "../assets/ToDoCard.jpg";
import coffeeImg from "../assets/CoffeeCard.jpg";
import {
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import "../i18n";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-black pb-6 gradient-80-to-transparent">
      <div
        id="projects"
        className=" max-w-[1040px] m-auto px-5 p-4 py-14 sm:px-20"
      >
        <h2 className="text-lime-400 text-3xl md:text-5xl font-bold mt-6 mb-28">
          {t("projects")}
        </h2>
        <div className="grid md:grid-cols-2 md:gap-6 gap-20">
          <a href="https://kvothe911.github.io/TF-codo-a-codo/" target="_blank">
            <ProjectCard
              img={kombuchanImg}
              title="Kombuchan App"
              description={t("kombuchan-project-description")}
              icons={[FaHtml5, FaCss3Alt, IoLogoJavascript]}
            />
          </a>
          <a href="https://kvothe911.github.io/coffee-project" target="_blank">
            <ProjectCard
              img={coffeeImg}
              title="Coffee Project"
              description={t("coffee-project-description")}
              icons={[FaReact, FaNodeJs, RiTailwindCssFill]}
            />
          </a>
          <a href="https://github.com/kvothe911/Backend-CAC" target="_blank">
            <ProjectCard
              img={toDoImg}
              title="ToDo App"
              description={t("todo-project-description")}
              icons={[FaReact, FaDatabase, FaNodeJs, RiTailwindCssFill]}
            />
          </a>
          <h6 className="text-white flex justify-center items-center">New Projects comming...</h6>
        </div>
      </div>
    </div>
  );
}

export default Projects;
