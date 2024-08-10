import React from "react";
import "../styles.css";

function ProjectCard({ img, title, description, icons }) {
  return (
    <div className="relative h-[15rem] flex items-center justify-end w-full overflow-hidden shadow-xl md:shadow-indigo-950 rounded-lg group sm:bg-black md:bg-indigo-900 md:hover:shadow-indigo-800 cursor-pointer">
      <img
        src={img}
        alt="/"
        className="absolute right-0 rounded-lg shadow-xl md:shadow-indigo-400/50 transform scale-100 md:scale-[65%] md:translate-x-[16%] md:translate-y-[-16%] object-contain transition-transform duration-500 ease-in-out group-hover:scale-[100%] group-hover:-translate-x-0 group-hover:translate-y-0 group-hover:object-cover "
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-black to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>

      <div className="absolute md:top-[20%] left-[5%] group-hover:translate-y-5 group-hover:opacity-0 duration-200"> {/* group-hover:-translate-x-[200%] move*/}
        <h3 className="text-neutral-50 text-3xl font-bold mt-6">
          {title}
          </h3>
        <p className="text-neutral-50 md:mt-12 mt-[20%] text-base max-w-64">
          {description}
        </p>
      </div>
      <div className="absolute top-52 flex justify-end pr-4 gap-2">
        {icons.map((Icon, index) => (
          <Icon key={index} className="text-neutral-50 mx-2" size={22} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
