import axios from "axios"
import { createResource } from "suspense-redux";

let fetch =  axios.get("https://jsonplaceholder.typicode.com/posts")
export const postsResource = createResource(
    'POSTS_FROM_API',
    fetch,
    state => state.postReducer.postList
)

export const {success: fetchPostsSuccess} = postsResource