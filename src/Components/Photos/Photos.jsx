import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Photos_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import "./Photos.css"

const Photos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Photos_Action())
    })
    const photosData = useSelector(state => state?.photosReducer)
    const list = photosData.photosList;
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <table className="table">
                <tr style={{height: "40px"}}>
                    <td style={{width: "80px"}}>#</td>
                    <td>Album ID</td>
                    <td>Title</td>
                    <td>URL</td>
                    <td>Thumbnail</td>
                </tr>
                {
                    list.map(elem => {
                        return <tr>
                            <td className="td">{elem.id}</td>
                            <td className="td">{elem.albumId}</td>
                            <td className="td">{elem.title}</td>
                            {/* <td className="td"><img src={elem.url}/></td> */}
                            {/* <td className="td"><img src={elem.thumbnailUrl}/></td> */}
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Photos