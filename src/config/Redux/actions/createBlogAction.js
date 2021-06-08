import axios from "axios"

export const setForm = (inputName, inputValue) => {
    return { type: 'SET_FORM_DATA', inputName, inputValue }
}

export const setImgPreview = (payload) => {
    return { type: 'SET_IMG_PREVIEW', payload }
}

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('image', form.image);
    data.append('description', form.description);
    axios.post('http://localhost:4000/v1/blog', data).then(result => {
        console.log("created successfully : ", result)
    }).catch(err => console.log(err))
}

export const updateToAPI = (form, blogId) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('image', form.image);
    data.append('description', form.description);
    axios.put(`http://localhost:4000/v1/blog/${blogId}`, data).then(result => {
        console.log("updated successfully : ", result)
    }).catch(err => console.log(err))
}