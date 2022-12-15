import React, { useState } from "react";
import { SectionButton } from "./SectionButton";
import TopStories from "./TopStories";

export const Hero = () => {
  const [section, setSection] = useState("world");

  const handleClick = (name) => {
    setSection(name);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            New York Times Top Stories
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Explore top stories daily and save the ones you want to read later.
          </p>
          <div className="place-content-center space-x-4">
            <SectionButton name={"arts"} handleClick={handleClick} />
            <SectionButton name={"business"} handleClick={handleClick} />
            <SectionButton name={"science"} handleClick={handleClick} />
            <SectionButton name={"books"} handleClick={handleClick} />
            <SectionButton name={"fashion"} handleClick={handleClick} />
            <SectionButton name={"opinion"} handleClick={handleClick} />
            <SectionButton name={"politics"} handleClick={handleClick} />
            <SectionButton name={"realestate"} handleClick={handleClick} />
            <SectionButton name={"food"} handleClick={handleClick} />
          </div>
          <TopStories section={section} />
        </div>
      </section>
    </>
  );
};
