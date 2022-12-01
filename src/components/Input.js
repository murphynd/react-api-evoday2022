import React, { useState } from "react";
export const Input = () => {
  const [query, setQuery] = useState("");
  const handleKeyDown = (event) => {
    console.log("I am the query outside of the if: ", query);
    if (event.key === "Enter") {
      console.log("I am the target event: ", event.target.value);
      setQuery(event.target.value);
      console.log("I am the query: ", query);
    }
  };

  return <input type="text" onKeyDown={handleKeyDown} />;
};
