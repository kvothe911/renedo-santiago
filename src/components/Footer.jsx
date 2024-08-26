import React from "react";

function Footer() {
  return (
    <div className="relative bg-black w-full flex justify-center">
      <div className="absolute w-full h-full transform background z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full gradient-top-to-transparent z-10"></div>
      <div className="flex mt-10 mb-5 z-20">
        <p className="text-lime-400 text-base sm:text-xl">
          &lt;santiago renedo&gt;
        </p>
        <p className="text-neutral-100 text-base sm:text-xl"> &nbsp;|&nbsp;</p>
        <p className="text-lime-400 text-base sm:text-xl">2024</p>
      </div>
    </div>
  );
}

export default Footer;
