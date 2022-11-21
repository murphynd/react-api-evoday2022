import React from "react";
import "../App.css";
import TopStories from "./TopStories";

function App() {
  return (
    <React.Fragment>
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Top Stories
      </h1>
      <TopStories section="arts" />
      <TopStories section="world" />
    </React.Fragment>
  );
}

export default App;
