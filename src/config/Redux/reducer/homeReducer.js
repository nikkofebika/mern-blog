const initialState = {
    dataBlogs: [],
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                ...state,
                dataBlogs: action.payload
            }
            break;

        default:
            return state;
            break;
    }
}
export default homeReducer;