const initialState = {
    name: 'Nikko'
}
const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
            break;

        default:
            return state;
            break;
    }
}
export default globalReducer;