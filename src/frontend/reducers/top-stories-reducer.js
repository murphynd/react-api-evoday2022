import * as c from "../actions/ActionTypes";

const topStoriesReducer = (state, action) => {
  switch (action.type) {
    case c.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories,
        isError: false,
      };
    case c.GET_TOP_STORIES_FAILURE:
      return {
        ...state,
        isLoaded: true,
        errorMessage: action.errorMessage,
        isError: true,
      };
    case c.GET_TOP_STORIES_LOADING:
      return {
        ...state,
        isLoaded: action.isLoaded,
        isError: false,
      };
    default:
      throw new Error(`there is no action matching ${action.type}.`);
  }
};

export default topStoriesReducer;
