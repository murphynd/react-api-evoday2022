import React, { useState } from "react";
import { LikeButton } from "./LikeButton";
import { SectionButton } from "./SectionButton";
import TopStories from "./TopStories";

export const Hero = () => {
  const [section, setSection] = useState("world");

  const handleClick = (name) => {
    setSection(name);
  };

  return (
    <>
      <h1> Hello I am a Hero Component</h1>
      <div className="flex space-x-4 ...">
        <SectionButton name={"arts"} handleClick={handleClick} />
        <SectionButton name={"business"} handleClick={handleClick} />
        <SectionButton name={"science"} handleClick={handleClick} />
        <SectionButton name={"sports"} handleClick={handleClick} />
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Top Stories
      </h1>
      
      <TopStories section={section} />
    </>
  );
};
