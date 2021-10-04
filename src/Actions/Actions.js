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

export const Photos_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos/");
        dispatch({
            type: "PHOTOS_FROM_API",
            payload: response.data
        })
    }
}

export const Todos_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({
            type: "TODOS_FROM_API",
            payload: response.data
        })
    }
}

export const Users_Action = () => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({
            type: "USERS_FROM_API",
            payload: response.data
        })
    }
}