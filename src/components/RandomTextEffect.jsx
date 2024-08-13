import React, { useEffect, useRef } from 'react';

const RandomTextEffect = ({ text, triggerAnimation }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (triggerAnimation) {
      const letters = "abcdefghijklmnopqrstuvwxyz";
      let iterations = 0;
      const interval = setInterval(() => {
        let word = text
          .split("")
          .map((letter, index) => {
            if (iterations > index) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        ref.current.innerText = word;

        if (iterations >= text.length) clearInterval(interval);

        iterations += 1 / 2;
      }, 30);

      return () => clearInterval(interval);
    } else {
      ref.current.innerText = text;
    }
  }, [triggerAnimation, text]);

  return <span ref={ref}>{text}</span>;
};

export default RandomTextEffect;