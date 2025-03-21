// Lista de palavras de 5 letras em português para o jogo Termo
export const WORDS = [
  "termo",
  "amigo",
  "festa",
  "papel",
  "hotel",
  "caixa",
  "tempo",
  "fluxo",
  "letra",
  "livro",
  "porta",
  "carro",
  "barco",
  "mundo",
  "piano",
  "força",
  "calor",
  "feliz",
  "nobre",
  "campo",
  "valor",
  "praia",
  "ontem",
  "noite",
  "ritmo",
  "sabor",
  "verde",
  "limpo",
  "natal",
  "ideia",
  "azul",
  "terra",
  "favor",
  "bolsa",
  "filme",
  "saber",
  "motor",
  "poder",
  "torre",
  "fonte",
  "foto",
  "plano",
  "vento",
  "chuva",
  "prova",
  "metro",
  "jogo",
  "radio",
  "doce",
  "maior",
  "menor",
  "corpo",
  "cinco",
  "pedra",
  "falar",
  "olhar",
  "chave",
  "palco",
  "veloz",
  "astro",
  "fugir",
  "baixo",
  "amora",
  "faixa",
  "salto",
  "sinal",
  "curso",
  "odeia",
  "viver",
  "fugir",
  "morte",
  "forte",
  "fazer",
];

// Função para selecionar uma palavra aleatória
export function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

// Função para verificar se uma palavra está na lista
export function isValidWord(word) {
  return WORDS.includes(word.toLowerCase());
}
