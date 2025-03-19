import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Inter } from "next/font/google"; //importa a fonte Inter do google fonts
import "@fortawesome/fontawesome-free/css/all.min.css"; //importa ícones do font awesome que instalei com npm

const inter = Inter({ subsets: ["latin"] }); //define a fonte Inter como a fonte padrão do projeto

export const metadata = {
  title: "Termo - Jogo de Palavras",
  description:
    "Jogo de adivinhar palavras similar ao Wordle criado com Next.js e Bootstrap",
  keywords: "jogo, palavras, adivinhar, wordle, nextjs, bootstrap",
};

export default function RootLayout({ children }) {
  //função deve se chamar RootLayout e receber um objeto children que representa o conteúdo que será renderizado dentro do layout. Permite ter uma estrutura consistente (cabeçalho, rodapé, menu de navegação) em todas as páginas, sem precisar repetir esse código em cada página.
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}