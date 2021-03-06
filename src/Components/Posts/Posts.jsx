import React, { useEffect, Suspense} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createResource } from 'suspense-redux'
import { Post_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import './Posts.css'

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Post_Action)
    }, [])
    const postsData = useSelector(state => state?.postReducer)


    return (
        <div className="navBar-and-body">
            <div>
                <NavBar />
            </div>
                <table className="table">
                    <tr style={{height: "40px"}}>
                        <td style={{width: "80px"}}>#</td>
                        <td style={{width: "80px"}}>User ID</td>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                    <Suspense fallback={<div>Loading...</div>}>
                    {
                        postsData.postList.map(elem => {
                            return <tr>
                                <td className="td">{elem.id}</td>
                                <td className="td">{elem.userId}</td>
                                <td className="td">{elem.title}</td>
                                <td className="td">{elem.body}</td>
                            </tr>
                        })
                    }
                    </Suspense>
                </table>
        </div>
    )
}

export default Posts