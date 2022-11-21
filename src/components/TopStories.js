import React, { useEffect, useReducer } from "react";
import topStoriesReducer from "../reducers/top-stories-reducer";
import { Card } from "./Card";
import { getTopStoriesFailure, getTopStoriesSuccess } from "./../actions/index";

const initialState = {
  isLoaded: false,
  topStories: [],
  error: null,
};

function TopStories() {
  const [state, dispatch] = useReducer(topStoriesReducer, initialState);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((jsonifiedResponse) => {
        const action = getTopStoriesSuccess(jsonifiedResponse.results);
        dispatch(action);
      })
      .catch((error) => {
        const action = getTopStoriesFailure(error.message);
        dispatch(action);
      });
  }, []);

  const { error, isLoaded, topStories } = state;

  if (error) {
    return <h1> Error: {error.message}</h1>;
  } else if (!isLoaded) {
    return <h1> ...loading</h1>;
  } else {
    return (
      <>
        <section className="px-5 container mx-auto">
          <h1 className="text-3xl font-bold underline">Top Stories</h1>
          <ul className="grid grid-cols-3 gap-10">
            {topStories.map((article, index) => (
              <li key={index}>
                <Card
                  url={article.url}
                  title={article.title}
                  abstract={article.abstract}
                  multimedia={article.multimedia[2]}
                />
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default TopStories;
