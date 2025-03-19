"use client";

import React from "react";

const Keyboard = ({ onKeyPress, guessedLetters }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const getKeyClass = (key) => {
    if (key === "ENTER" || key === "⌫") return "key key-wide";

    const letter = key.toLowerCase();
    if (guessedLetters.correct.includes(letter)) return "key correct";
    if (guessedLetters.present.includes(letter)) return "key present";
    if (guessedLetters.absent.includes(letter)) return "key absent";

    return "key";
  };

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={getKeyClass(key)}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
