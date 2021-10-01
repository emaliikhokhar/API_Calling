import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Todos_Action } from '../../Actions/Actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import "./Todos.css"

const Todos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Todos_Action())
    })
    const todosData = useSelector(state => state?.todosReducer)
    const list = todosData.todoList;
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <table className="table">
                <tr style={{height: "40px"}}>
                    <td style={{width: "80px"}}>#</td>
                    <td style={{width: "80px"}}>User ID</td>
                    <td>Title</td>
                    <td>Complete Status</td>
                </tr>
                {
                    list.map(elem => {
                        return <tr>
                            <td className="td">{elem.id}</td>
                            <td className="td">{elem.userId}</td>
                            <td className="td">{elem.title}</td>
                            <td className="td">{elem.completed ? <span>True</span>: <span>False</span>}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Todos