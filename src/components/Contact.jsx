import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaCopy } from "react-icons/fa";

function Contact() {
  const [copySuccess, setCopySuccess] = useState("");

  const email = "renedo.santiago@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess("Email copied!");
        setTimeout(() => setCopySuccess(""), 2000); // El mensaje de copiado desaparecerá después de 2 segundos
      })
      .catch(() => {
        setCopySuccess("Fail to copy!");
      });
  };

  return (
    <div className="w-full bg-black pb-6 gradient-80-to-transparent">
      <div
        id="contact"
        className=" max-w-[1040px] m-auto px-10 p-4 py-14 sm:px-20"
      >
        <h2 className="text-neutral-100 text-3xl md:text-5xl font-bold mb-12 md:mb-16 ">
          CONTACT
        </h2>
          <p className="text-neutral-100 text-base sm:text-xl">
            Thank you for visiting my portfolio. If you'd like to get in touch,
            feel free to connect with me through social media or send me an
            email.
          </p>
        <div className="mt-16">
          <div className="mb-10 flex gap-10">
            <a
              href="https://www.linkedin.com/in/santiago-renedo-527752303/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-indigo-600 duration-300 move"
              />
            </a>
            <a
              href="https://github.com/kvothe911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-indigo-600 duration-300 move"
              />
            </a>
            <a
              href="https://www.instagram.com/santiago_renedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={25}
                className="text-neutral-100 cursor-pointer hover:scale-[115%] hover:text-indigo-600 duration-300 move"
              />
            </a>
          </div>
          <div className="flex items-center mt-12">
            <span className="text-neutral-100 px-4 py-2 text-sm sm:text-xl border-2 border-indigo-900 rounded-xl">{email}</span>
            <button
              onClick={copyToClipboard}
              className="ml-4 px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700 cursor-pointer hover:scale-[105%] duration-500 move"
            >
              <FaCopy
                size={25}
                className="text-neutral-100"
              />
            </button>
            {copySuccess && (
              <p className="text-neutral-100 ml-8">{copySuccess}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
