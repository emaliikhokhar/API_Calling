const initialState = {
    postList: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POSTS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.postList = temp;
            return state;

        default: return state;
    }
}

export default postReducer