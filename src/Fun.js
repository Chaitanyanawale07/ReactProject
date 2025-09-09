import React, { useState } from "react";

function Fun() {
  const [message, setMessage] = useState("Hello, I am Fun Component!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Tiger Zinda Hai!")}>
        Click Me
      </button>
    </div>
  );
}

export default Fun;
