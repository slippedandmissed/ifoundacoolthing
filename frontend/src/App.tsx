import "./App.css";
import Cat from "./Cat";

export default function App() {
  return (
    <>
      <h1>Pet the cute cats 😇</h1>
      <h2>go on, do it</h2>
      <main>
        <Cat isHandFlipped={true} name="Biscuit" />
        <Cat name="Blossom" />
      </main>
    </>
  );
}
