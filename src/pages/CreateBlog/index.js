import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { Input, Textarea } from "../../components";
import { postToAPI, updateToAPI, setForm, setImgPreview } from "../../config/Redux/actions";

const CreateBlog = (props) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, image, description } = form;

  useEffect(() => {
    const blogId = props.match.params.blogId;
    if (blogId) {
      setIsUpdate(true)
      axios.get(`http://localhost:4000/v1/blog/${blogId}`)
        .then(res => {
          console.log('respon : ', res.data)
          dispatch(setForm('title', res.data.data.title))
          dispatch(setForm('description', res.data.data.description))
          dispatch(setImgPreview(`http://localhost:4000/${res.data.data.image}`))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogId = props.match.params.blogId;
    if (blogId) {
      updateToAPI(form, blogId);
    } else {
      postToAPI(form);
    }
  }
  const history = useHistory();
  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-3">{isUpdate ? 'Update' : 'Create'} Blog Post</h3>
        <a onClick={() => history.push('/')} className="text-blue-500 hover:text-blue-700">Kembali</a>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input label="Title" value={title} type="text" placeholder="Title..." onChange={(e) => dispatch(setForm('title', e.target.value))} />
        <div className="h-3" />
        {imgPreview && <a href={imgPreview} target="_blank"><img src={imgPreview} alt="preview" width="200" /></a>}
        <Input label="Gambar" type="file" onChange={(e) => onImageUpload(e)} />
        <div className="h-3" />

        <Textarea label="Description" rows="7" value={description} type="text" placeholder="Description..." onChange={(e) => dispatch(setForm('description', e.target.value))} />
        <div className="h-3" />
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 py-2 hover:bg-green-600"
        >
          {isUpdate ? 'Update' : 'Simpan'}
        </button>
      </form>
    </div>
  );
};

export default withRouter(CreateBlog);
