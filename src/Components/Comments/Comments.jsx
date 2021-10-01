import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Comment_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import './Comments.css'

const Comments = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Comment_Action())
    })
    const commentData = useSelector(state => state?.commentReducer)
    const list = commentData.commentList;
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <table className="table">
                <tr style={{height: "40px"}}>
                    <td style={{width: "80px"}}>#</td>
                    <td style={{width: "80px"}}>Post ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Description</td>
                </tr>
                {
                    list.map(elem => {
                        return <tr>
                            <td className="td">{elem.id}</td>
                            <td className="td">{elem.postId}</td>
                            <td className="td">{elem.name}</td>
                            <td className="td">{elem.email}</td>
                            <td className="td">{elem.body}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Comments