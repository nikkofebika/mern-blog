import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";

const DetailBlog = (props) => {
  const history = useHistory();
  const [data, setData] = useState({})
  useEffect(() => {
    const blogId = props.match.params.blogId
    axios.get(`http://localhost:4000/v1/blog/${blogId}`)
      .then(res => {
        console.log('respon : ', res.data)
        setData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props])
  if (data.author) {
    return (
      <div className="flex flex-col w-full md:w-3/4 mx-auto mt-5 justify-center items-center">
        <a onClick={() => history.goBack()} className="mb-3 cursor-pointer text-blue-500 hover:text-blue-600 font-medium">Kembali</a>
        <div>
          <img src={`http://localhost:4000/${data.image}`} alt={data.title} className="max-w-lg object-cover object-center rounded" />
        </div>
        <div>
          <h3 className="font-bold text-3xl">{data.title}</h3>
          <p className="text-gray-600">{data.author.name} - {data.createdAt}</p>
          <p className="mt-3">{data.description}</p>
        </div>
      </div>
    );
  }
  return <p>Loading data...</p>
};

export default withRouter(DetailBlog);
