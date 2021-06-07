import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import BlogImg from "../../assets/images/blog.jpg";
import { setDataBlogs } from "../../config/Redux/actions";

const BlogCard = ({ title, description, image, author, createdAt }) => {
  const history = useHistory();
  return (
    <article className="rounded bg-gray-300 overflow-hidden">
      <a onClick={() => history.push('/detail-blog')}>
        <img src={image} alt="title" className="" />
        <div className="p-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{author} - {createdAt}</p>
          <p className>{description}</p>
        </div>
      </a>
    </article>
  )
}

const Home = () => {
  const { dataBlogs } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  console.log('dataBlogs global : ', dataBlogs);
  // const [dataBlogs, setDataBlogs] = useState([]);
  useEffect(() => {
    // axios.get('http://localhost:4000/v1/blog')
    //   .then((result) => {
    //     // setDataBlogs(result.data.data);
    //     dispatch(setDataBlogs(result.data.data))
    //     // console.log(result.data.data)
    //   })
    //   .catch(err => console.log(err))
    dispatch(setDataBlogs(result.data.data))
  }, [dispatch])
  const history = useHistory();
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-end">
        <button className="bg-green-400 rounded px-4 py-2 font-medium hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => history.push('/create-blog')}>Create Blog</button>
      </div>
      <div className="flex space-x-4 mt-5">
        {
          dataBlogs.length > 0 ? dataBlogs.map(blog => {
            return (
              <BlogCard key={blog._id} title={blog.title} description={blog.description} image={`http://localhost:4000/${blog.image}`} author={blog.author.name} createdAt={blog.createdAt} />
            )
          })
            :
            <div className="bg-blue-400 w-full rounded p-5">
              <h1 className="text-white">Belum ada Blog broo...</h1>
            </div>
        }
      </div>
    </div>
  );
};
export default Home;
