import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './Posts.css'

const Posts = () => {
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <div className="body-of-posts">
                Body
            </div>
        </div>
    )
}

export default Posts