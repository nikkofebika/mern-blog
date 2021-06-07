const initialState = {
  dataBlogs: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        ...state,
        dataBlogs: action.payload,
      };
      break;
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
export default homeReducer;
