import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Users_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import "./Users.css"

const Users = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Users_Action())
    })
    const usersData = useSelector(state => state?.usersReducer)
    const list = usersData.usersList;
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <table className="table">
                <tr style={{height: "40px"}}>
                    <td style={{width: "80px"}}>#</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Zip Code</td>
                    <td>Lat-Lng</td>
                </tr>
                {
                    list.map(elem => {
                        return <tr>
                            <td className="td">{elem.id}</td>
                            <td className="td">{elem.name}</td>
                            <td className="td">{elem.username}</td>
                            <td className="td">{elem.email}</td>
                            <td className="td">{elem.address.street + ", " + elem.address.suite + ", " + elem.address.city}</td>
                            <td className="td">{elem.address.zipcode}</td>
                            <td className="td">{elem.address.geo.lat + "\u00b0 " + elem.address.geo.lng + "\u00b0"}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Users