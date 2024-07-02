import React from "react";
import { useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>`Count : {count}`</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
