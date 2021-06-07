import Axios from "axios"

export const setDataBlogs = () => {
    Axios.get('http://localhost:4000/v1/blog')
        .then((result) => {
            // setDataBlogs(result.data.data);
            dispatch(setDataBlogs(result.data.data))
            // console.log(result.data.data)
        })
        .catch(err => console.log(err))
    // return { type: 'SET_BLOGS', payload }
    // return { type: 'SET_BLOGS', payload: result.data.data }
}