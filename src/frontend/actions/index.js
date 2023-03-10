import * as c from "./ActionTypes";

export const getTopStoriesSuccess = (topStories) => ({
  type: c.GET_TOP_STORIES_SUCCESS,
  topStories,
});

export const getTopStoriesFailure = (errorMessage) => ({
  type: c.GET_TOP_STORIES_FAILURE,
  errorMessage,
});

export const getTopStoriesLoading = (isLoaded) => ({
  type: c.GET_TOP_STORIES_LOADING,
  isLoaded,
});
