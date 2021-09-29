import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-css">
            <div className="navbar-heading">
                <Link to="/posts">
                    Posts
                </Link>
            </div>
            <div className="navbar-heading">
                <Link to="/comments">
                    Comments
                </Link>
            </div>
            <div className="navbar-heading">
                <Link to="/albums">
                    Albums
                </Link>
            </div>
        </div>
    )
}

export default NavBar
