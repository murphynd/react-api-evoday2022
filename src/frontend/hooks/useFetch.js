import { useEffect, useReducer } from "react";
import topStoriesReducer from "../reducers/top-stories-reducer";
import {
  getTopStoriesFailure,
  getTopStoriesSuccess,
  getTopStoriesLoading,
} from "../actions/index"


const useFetch = (section) => {
  const initialState = {
    isLoaded: false,
    topStories: [],
    errorMessage: null,
    isError: false,
  };

  const [state, dispatch] = useReducer(topStoriesReducer, initialState);
  useEffect(() => {
    console.log("use fetch with: ", section);
    const action = getTopStoriesLoading(false);
    dispatch(action);

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
      .catch((errorMessage) => {
        const action = getTopStoriesFailure(errorMessage.message);
        dispatch(action);
      });
  }, [section]);

  const { isError, errorMessage, isLoaded, topStories } = state;
  return { isError, errorMessage, isLoaded, topStories };
};

export default useFetch;
