import topStoriesReducer from "../../reducers/top-stories-reducer";
import * as c from "../../actions/ActionTypes";

describe("topStoriesReducer", () => {
  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null,
  };

  let action;

  test("should succesfully throw a new error if a non matching action type is passed into it", () => {
    expect(() => {
      topStoriesReducer(initialState, { type: null });
    }).toThrowError("there is no action matching null.");
  });

  test("successfully getting top stories should change isLoaded to true and update topStories", () => {
    const topStories = "An article";
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories,
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      error: null,
      isLoaded: true,
      topStories: "An article",
    });
  });

  test("failing to get topStories should change isLoaded to true and add an error message", () => {
    const error = "An error";
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error,
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      error: "An error",
      isLoaded: true,
      topStories: [],
    });
  });
});
