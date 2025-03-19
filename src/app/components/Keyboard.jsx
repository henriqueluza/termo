"use client"; //diz que o componente deve ser renderizado no lado do cliente ao invés do servidor

import React from "react"; //permite criar componentes react e jsx

const Keyboard = ({ onKeyPress, guessedLetters }) => {
  //função Keyboard recebe duas propriedades como argumentos: onKeyPress e guessedLetters. A seta indica que estamos definindo uma função de um componente React que retorna JSX.
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const getKeyClass = (key) => {
    //função getKeyClass recebe uma chave como argumento e retorna uma string que representa a classe CSS para estilizar o botão da tecla
    if (key === "ENTER" || key === "⌫") return "key key-wide"; //se a chave for ENTER ou ⌫, retorna a classe CSS key key-wide

    const letter = key.toLowerCase(); //converte a chave para minúsculas
    if (guessedLetters.correct.includes(letter)) return "key correct"; //se a chave estiver no array guessedLetters.correct, retorna a classe CSS key correct
    if (guessedLetters.present.includes(letter)) return "key present"; //se a chave estiver no array guessedLetters.present, retorna a classe CSS key present
    if (guessedLetters.absent.includes(letter)) return "key absent"; //se a chave estiver no array guessedLetters.absent, retorna a classe CSS key absent

    return "key"; //se nenhuma das condições anteriores for atendida, retorna a classe CSS key
  };

  return (
    //retorna um componente JSX que representa o teclado do jogo
    <div className="keyboard">
      {rows.map(
        (
          row,
          rowIndex //percorre o array rows e retorna um componente JSX para cada linha do teclado
        ) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map(
              (
                key //percorre o array row e retorna um componente JSX para cada tecla do teclado
              ) => (
                <button
                  key={key}
                  className={getKeyClass(key)} //chama a função getKeyClass para obter a classe CSS para a tecla
                  onClick={() => onKeyPress(key)} //chama a função onKeyPress com a tecla como argumento
                >
                  {key}
                </button>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Keyboard;
