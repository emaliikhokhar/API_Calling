const initialState = {
    commentList: []
}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "COMMENTS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.commentList = temp;
            return state;

        default: return state;
    }
}

export default commentReducer