import React from "react";

function About() {
  return (
    <div className="relative bg-black w-full flex justify-center">
      <div className="absolute w-full h-full transform opacity-55 background"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-80-to-transparent "></div>
      <div
        id="about"
        className="relative max-w-[1040px] flex flex-col top-0 m-auto mx-10 my-16 sm:px-20"
      >
        <h2 className="text-neutral-100 text-3xl md:text-5xl font-bold pt-16 mb-12 md:mb-16 lg:mb-0">
          ABOUT ME
        </h2>
        <h3 className="text-neutral-400 text-xl md:text-2xl font-bold sm:pt-0 lg:pt-6 mb-12 md:mb-16 lg:mb-0">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h3>
        <div className="items-start">
          <h3 className="text-neutral-100 md:text-3xl text-2xl text-center font-bold sm:pt-0 lg:pt-12 pb-10 lg:pb-0">
            Know About me!
          </h3>
          <div className="lg:grid grid-cols-2 items-center md:flex md:flex-col md:mt-0 md:items-center">
            <p className="text-neutral-100 text-base sm:text-xl">
              I’m Argentine with a diverse professional background. From a young
              age, I fixed PCs and became an electronics technician. Later, I
              worked as a lifeguard, which taught me to work under pressure,
              value teamwork, and make quick decisions.
              <br /> <br />
              Currently, I am studying web development, fascinated by how it can
              offer practical solutions. Although I have much to learn, my
              determination and enthusiasm are strong. I am excited about the
              opportunities in programming and ready to tackle challenges with
              the same dedication and spirit as in my lifeguarding career.
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
            My Skills
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
