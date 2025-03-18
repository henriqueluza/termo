import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-primary">Hello, Next.js with Bootstrap!</h1>
      <button className="btn btn-success">Clique aqui</button>
    </div>
  );
}
