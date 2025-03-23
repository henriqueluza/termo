"use client";

import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import GameNavbar from "./components/Navbar";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { getRandomWord, isValidWord } from "./utils/words";
import Footer from "./components/Footer";

export default function Home() {
  const [secretWord, setSecretWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState("");
  const [guessedLetters, setGuessedLetters] = useState({
    correct: [],
    present: [],
    absent: [],
  });

  useEffect(() => {
    const word = getRandomWord();
    setSecretWord(word);
    console.log("Palavra secreta:", word); // Para debug
  }, []);

  const handleKeyPress = useCallback(
    (key) => {
      if (gameStatus !== "playing") return;

      if (key === "ENTER") {
        if (currentGuess.length !== 5) {
          showMessage("A palavra deve ter 5 letras");
          return;
        }

        if (!isValidWord(currentGuess)) {
          showMessage("Palavra não reconhecida");
          return;
        }

        const newGuesses = [...guesses];
        newGuesses.push({
          word: currentGuess,
          answer: secretWord,
        });
        setGuesses(newGuesses);

        updateGuessedLetters(currentGuess);

        if (currentGuess.toLowerCase() === secretWord.toLowerCase()) {
          setGameStatus("won");
          showMessage("Parabéns! Você acertou!");
        } else if (currentRow >= 5) {
          setGameStatus("lost");
          showMessage(
            `Você perdeu! A palavra era: ${secretWord.toUpperCase()}`
          );
        } else {
          setCurrentRow(currentRow + 1);
          setCurrentGuess("");
        }
      } else if (key === "⌫") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key.toLowerCase());
      }
    },
    [currentGuess, currentRow, gameStatus, guesses, secretWord]
  );

  const updateGuessedLetters = (guess) => {
    const correct = [...guessedLetters.correct];
    const present = [...guessedLetters.present];
    const absent = [...guessedLetters.absent];

    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];

      if (letter === secretWord[i]) {
        if (!correct.includes(letter)) {
          correct.push(letter);
        }
        // Remover da lista "present" se estiver lá
        const presentIndex = present.indexOf(letter);
        if (presentIndex !== -1) {
          present.splice(presentIndex, 1);
        }
      } else if (secretWord.includes(letter)) {
        if (!correct.includes(letter) && !present.includes(letter)) {
          present.push(letter);
        }
      } else {
        if (!absent.includes(letter)) {
          absent.push(letter);
        }
      }
    }

    setGuessedLetters({ correct, present, absent });
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (e.key === "Backspace") {
        handleKeyPress("⌫");
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  return (
    <main>
      <GameNavbar />
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
        {message && (
          <div className="alert alert-info text-center mb-3">{message}</div>
        )}
        <div className="board-container">
          <Board
            guesses={guesses.map((g) => g.word.split(""))}
            currentGuess={currentGuess}
            currentRow={currentRow}
            gameStatus={gameStatus}
            secretWord={secretWord}
          />
        </div>
        <Keyboard onKeyPress={handleKeyPress} guessedLetters={guessedLetters} />
      </Container>
      <Footer />
    </main>
  );
}
