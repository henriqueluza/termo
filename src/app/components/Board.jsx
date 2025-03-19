"use client";

import React from "react";

const Board = ({
  guesses,
  currentGuess,
  currentRow,
  gameStatus,
  secretWord,
}) => {
  // Criando uma matriz 6x5 para o tabuleiro
  const board = Array(6)
    .fill()
    .map(() => Array(5).fill(""));

  // Preencher o tabuleiro com palpites anteriores
  guesses.forEach((guess, i) => {
    for (let j = 0; j < guess.length; j++) {
      board[i][j] = guess[j];
    }
  });

  // Preencher a linha atual com o palpite atual
  if (gameStatus === "playing") {
    for (let i = 0; i < currentGuess.length; i++) {
      board[currentRow][i] = currentGuess[i];
    }
  }

  // Função para determinar a classe da célula
  const getCellClass = (rowIndex, colIndex) => {
    const baseClass = "board-tile";

    // Se ainda não temos um palpite completo para esta linha
    if (
      rowIndex > currentRow ||
      (rowIndex === currentRow && gameStatus === "playing")
    ) {
      return baseClass;
    }

    // Para linhas com palpites já validados
    if (rowIndex < currentRow || gameStatus !== "playing") {
      const letter = board[rowIndex][colIndex];

      if (!letter || !secretWord) return baseClass;

      if (letter === secretWord[colIndex]) {
        return `${baseClass} correct animated`;
      } else if (secretWord.includes(letter)) {
        return `${baseClass} present animated`;
      } else {
        return `${baseClass} absent animated`;
      }
    }

    return baseClass;
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={getCellClass(rowIndex, colIndex)}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
