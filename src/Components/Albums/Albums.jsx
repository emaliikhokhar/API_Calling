import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Albums_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import './Albums.css'

const Albums = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Albums_Action())
    })
    const albumData = useSelector(state => state?.albumReducer)
    const list = albumData.albumList;
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <div className="body-of-albums">
            <table className="table">
                <tr style={{height: "40px"}}>
                    <td>#</td>
                    <td>User ID</td>
                    <td>Title</td>
                </tr>
                {
                    list.map(elem => {
                        return <tr>
                            <td className="td">{elem.id}</td>
                            <td className="td">{elem.userId}</td>
                            <td className="td">{elem.title}</td>
                        </tr>
                    })
                }
            </table>
            </div>
        </div>
    )
}

export default Albums