import { useEffect, useState } from "react";
import "./Cat.css";

export default function Cat({
  name,
  isHandFlipped = false,
}: {
  name: string;
  isHandFlipped?: boolean;
}) {
  const [petLevel, setPetLevel] = useState(0);
  const isBeingPet = petLevel > 0;

  function pet() {
    setPetLevel((prev) => prev + 1);
    setTimeout(() => setPetLevel((prev) => prev - 1), 1000);
  }

  useEffect(() => {
    if (isBeingPet) {
      fetch(`${import.meta.env.VITE_SERVER_URL}?cat=${encodeURIComponent(name)}`);
    }
  }, [isBeingPet]);

  return (
    <div className="container">
      <img
        src={`/cats/${name}.png`}
        alt={name}
        className="cat"
        onClick={() => pet()}
      />
      <div
        className={`hand ${isBeingPet ? "petting" : ""} ${
          isHandFlipped ? "flipped" : ""
        }`}
      >
        <img src="/hand.png" alt="" />
      </div>
    </div>
  );
}
