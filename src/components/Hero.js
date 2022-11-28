import React, { useState } from "react";
import TopStories from "./TopStories";

export const Hero = () => {
  const [section, setSection] = useState("world");
  console.log(section);

  const handleClick = (name) => {
    setSection(name);
    console.log(section);
  };

  return (
    <>
      <h1> Hello I am a Hero Component</h1>
      <button onClick={() => handleClick("arts")}>ARTS</button>
      <button onClick={() => handleClick("business")}>Business</button>
      <button onClick={() => handleClick("science")}>science</button>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Top Stories
      </h1>
      <TopStories section={section} />
    </>
  );
};
