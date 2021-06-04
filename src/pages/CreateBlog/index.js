import React from "react";
import { useHistory } from "react-router";
import { Input, Textarea } from "../../components";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className="flex justify-between">
        <h3 className="font-semibold mb-3">Create Blog Post</h3>
        <a href="javascript:void()" onClick={() => history.push('/')} className="text-blue-500 hover:text-blue-700">Kembali</a>
      </div>
      <form>
        <Input label="Title" type="text" placeholder="Title..." />
        <div className="h-3" />
        <Input label="Gambar" type="file" placeholder="Title..." />
        <div className="h-3" />
        <Textarea label="Description" rows="7" type="text" placeholder="Description..." />
        <div className="h-3" />
        <button
          type="button"
          className="bg-green-500 text-white font-semibold rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 py-2 hover:bg-green-600"
        >
          Submit
            </button>
      </form>
    </div>
  );
};

export default CreateBlog;
