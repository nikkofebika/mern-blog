import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Input, Textarea } from "../../components";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [description, setDescription] = useState('');

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('title', title);
        data.append('image', image);
        data.append('description', description);
        axios.post('http://localhost:4000/v1/blog', data).then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    }
    const history = useHistory();
    return (
        <div className="w-3/4 mx-auto mt-5">
            <div className="flex justify-between">
                <h3 className="font-semibold mb-3">Create Blog Post</h3>
                <a onClick={() => history.push('/')} className="text-blue-500 hover:text-blue-700">Kembali</a>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input label="Title" type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                <div className="h-3" />
                {imagePreview && <a href={imagePreview} target="_blank"><img src={imagePreview} alt="preview" width="200" /></a>}
                <Input label="Gambar" type="file" onChange={(e) => onImageUpload(e)} />
                <div className="h-3" />
                <Textarea label="Description" rows="7" type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />
                <div className="h-3" />
                <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 py-2 hover:bg-green-600"
                >
                    Submit
            </button>
            </form>
        </div>
    );
};

export default CreateBlog;
