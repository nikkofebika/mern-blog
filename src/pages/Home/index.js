import React from "react";
import { useHistory } from "react-router";
import BlogImg from "../../assets/images/blog.jpg";

const BlogCard = () => {
  const history = useHistory();
  return (
    <article className="rounded bg-gray-300 overflow-hidden">
      <a onClick={() => history.push('/detail-blog')}>
        <img src={BlogImg} alt="blog" className="" />
        <div className="p-3">
          <h3 className="text-xl font-semibold">Judul Blog</h3>
          <p>Deskripsi</p>
        </div>
      </a>
    </article>
  )
}

const Home = () => {
  const history = useHistory();
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-end">
        <button className="bg-green-400 rounded px-4 py-2 font-medium hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50" onClick={() => history.push('/create-blog')}>Create Blog</button>
      </div>
      <div className="flex space-x-4 mt-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
export default Home;
