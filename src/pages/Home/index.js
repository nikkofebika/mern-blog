import axios from "axios";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setDataBlogs } from "../../config/Redux/actions";

const BlogCard = ({
  _id,
  title,
  description,
  image,
  author,
  createdAt,
  onDelete,
}) => {
  const history = useHistory();
  return (
    <article className="rounded bg-gray-300 overflow-hidden">
      <img
        src={image}
        alt="title"
        onClick={() => history.push(`/detail-blog/${_id}`)}
        width="300"
      />
      <div className="flex justify-end gap-x-2 mr-3">
        <p
          onClick={() => history.push(`/create-blog/${_id}`)}
          className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          Edit
        </p>{" "}
        |{" "}
        <p
          onClick={() => onDelete(_id)}
          className="font-semibold text-red-600 hover:text-red-800 cursor-pointer"
        >
          Delete
        </p>
      </div>
      <div className="p-3">
        <h3
          className="text-xl font-semibold"
          onClick={() => history.push(`/detail-blog/${_id}`)}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {author} - {createdAt}
        </p>
        <p className>{description}</p>
      </div>
    </article>
  );
};

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlogs, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  // console.log("dataBlogs global : ", dataBlogs);
  // const [dataBlogs, setDataBlogs] = useState([]);
  useEffect(() => {
    // axios.get('http://localhost:4000/v1/blog')
    //   .then((result) => {
    //     // setDataBlogs(result.data.data);
    //     dispatch(setDataBlogs(result.data.data))
    //     // console.log(result.data.data)
    //   })
    //   .catch(err => console.log(err))
    dispatch(setDataBlogs(counter));
  }, [dispatch, counter]);
  const history = useHistory();

  const handlePrevious = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const handleNext = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const handleDelete = (blogId) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log(blogId);
            axios
              .delete(`http://localhost:4000/v1/blog/${blogId}`)
              .then((result) => {
                console.log("delete successfully : ", result);
                dispatch(setDataBlogs(counter));
              })
              .catch((err) => console.log(err));
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-end">
        <button
          className="bg-green-400 rounded px-4 py-2 font-medium hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => history.push("/create-blog")}
        >
          Create Blog
        </button>
      </div>
      <div className="flex space-x-4 mt-5">
        {dataBlogs.length > 0 ? (
          dataBlogs.map((blog) => {
            return (
              <BlogCard
                key={blog._id}
                _id={blog._id}
                title={blog.title}
                description={blog.description}
                image={`http://localhost:4000/${blog.image}`}
                author={blog.author.name}
                createdAt={blog.createdAt}
                onDelete={handleDelete}
              />
            );
          })
        ) : (
          <div className="bg-blue-400 w-full rounded p-5">
            <h1 className="text-white">Belum ada Blog broo...</h1>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-5">
        <button
          onClick={() => handlePrevious()}
          className="bg-green-500 rounded p-3 text-white font-medium focus:outline-none active:bg-green-600"
        >
          Previous
        </button>
        <h3 className="font-semibold">
          {page.currentPage} / {page.totalPage}
        </h3>
        <button
          onClick={() => handleNext()}
          className="bg-green-500 rounded p-3 text-white font-medium focus:outline-none active:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Home;
