export const Posts = (data) => {
    return {
        type: "POSTS",
        payload: data
    }
}

export const Comments = (data) => {
    return {
        type: "COMMENTS",
        payload: data
    }
}

export const Albums = (data) => {
    return {
        type: "ALBUMS",
        payload: data
    }
}