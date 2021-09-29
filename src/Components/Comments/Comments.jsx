import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './Comments.css'

const Comments = () => {
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <div className="body-of-comments">
            Comments
            </div>
        </div>
    )
}

export default Comments