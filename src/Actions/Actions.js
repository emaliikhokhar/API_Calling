import axios from "axios"

export const Post_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({
            type: "POSTS_FROM_API",
            payload: response.data
        })
    }
}

export const Comment_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        dispatch({
            type: "COMMENTS_FROM_API",
            payload: response.data
        })
    }
}

export const Albums_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
        dispatch({
            type: "ALBUMS_FROM_API",
            payload: response.data
        })
    }
}