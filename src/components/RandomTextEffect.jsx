import React, { useState } from "react";

const RandomTextEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar la animación

  const handleMouseOver = () => {
    if (isAnimating) return; // Si ya está animando, no hacer nada

    setIsAnimating(true); // Inicia la animación
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        return text
          .split("")
          .map((letter, index) => {
            if (iterations > index) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsAnimating(false); // Finaliza la animación
      }

      iterations += 1 / 2;
    }, 30);
  };

  return (
    <h1
      id="random-text"
      className="text-lime-400 text-3xl sm:text-5xl font-bold pt-6 cursor-default"
      onMouseOver={handleMouseOver}
    >
      {displayText}
    </h1>
  );
};

export default RandomTextEffect;