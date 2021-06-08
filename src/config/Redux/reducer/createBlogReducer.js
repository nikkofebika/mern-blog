const initialState = {
    form: {
        title: '',
        image: '',
        description: '',
    },
    imgPreview: null
}

const createBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.inputName]: action.inputValue
                }
            }
            break;
        case 'SET_IMG_PREVIEW':
            return {
                ...state,
                imgPreview: action.payload
            }
            break;
        default:
            return state;
            break;
    }
}
export default createBlogReducer;