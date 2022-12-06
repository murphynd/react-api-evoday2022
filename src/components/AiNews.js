import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export function AiNews() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
  // const [story, setStory] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get('https://hacker-news.firebaseio.com/v0/item/8863.json')
  //     .then(result => {
  //       setStory(result.data);
  //     });
  // }, []);
  // if (!story) {
  //   return 'Loading...';
  // }
  // return (
  //   <div>
  //     <h1>{story.title}</h1>
  //     By: {story.by}
  //     <p>{story.text}</p>
  //   </div>
  // );
}
