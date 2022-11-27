import { useEffect, useReducer } from "react";
import topStoriesReducer from "../reducers/top-stories-reducer";
import { getTopStoriesFailure, getTopStoriesSuccess } from "./../actions/index";

const useFetch = (section) => {
  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null,
  };

  const [state, dispatch] = useReducer(topStoriesReducer, initialState);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
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
  }, [section]);

  const { error, isLoaded, topStories } = state;
  return { error, isLoaded, topStories };
};

export default useFetch;
