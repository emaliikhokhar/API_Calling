const initialState = {
    albumList: []
}

const albumReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ALBUMS_FROM_API":
            let temp = [];
            temp = action.payload;
            state.albumList = temp;
            return state;


        default: return state;
    }
}

export default albumReducer