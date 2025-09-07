"use client";

import React, { useEffect, useState } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

const TextScrambler = ({
  text,
  duration = 1200,
  className = "",
}) => {
  const [scrambledText, setScrambledText] = useState("");

  useEffect(() => {
    let frame = 0;
    const fps = 30;
    const steps = Math.ceil((duration / 1000) * fps);
    const length = text && text.length || 0;

    const scramble = () => {
      let result = "";
      for (let i = 0; i < length; i++) {
        if (i < (frame / steps) * length) {
          result += text[i];
        } else {
          result += randomChar();
        }
      }

      setScrambledText(result);

      if (frame++ < steps) {
        requestAnimationFrame(scramble);
      }
    };

    scramble();
  }, [text, duration]);

  return <span className={className}>{scrambledText}</span>;
};

export default TextScrambler;
