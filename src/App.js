import React from "react";
import Counter from "./Counter/Counter";

export default function App() {
  return (
    <div>
      <Counter
        title="Лічильник"
        subtitle="Режим підрахунку"
        initialValue={0}
        variableSummand={0}
        firstSummand={1}
        secondSummand={5}
        thirdSummand={10}
      />
    </div>
  );
}