const initialState = {
    photosList: []
}

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PHOTOS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.photosList = temp;
            return state;

        default: return state;
    }
}

export default photosReducer