import axios from "axios";

export const setDataBlogs = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/v1/blog?page=${page}`)
      .then((result) => {
        // setDataBlogs(result.data.data);
        const responseAPI = result.data;
        dispatch({ type: "SET_BLOGS", payload: responseAPI.data });
        dispatch({
          type: "SET_PAGE",
          payload: {
            currentPage: responseAPI.current_page,
            totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
          },
        });
        console.log("responseAPI : ", responseAPI);
      })
      .catch((err) => console.log(err));
    // return { type: 'SET_BLOGS', payload }
    // return { type: 'SET_BLOGS', payload: result.data.data }
  };
};
