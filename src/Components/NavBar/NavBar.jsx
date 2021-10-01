import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { BsFilePost } from 'react-icons/bs';
import { BiCommentDetail, BiFilm, BiHomeCircle } from "react-icons/bi";

const NavBar = () => {

    return (
        <div className="navbar-css">
            <NavLink exact to="/" activeClassName="active">
                <div className="navbar-heading">
                    <BiHomeCircle/>
                </div>
            </NavLink>
            <NavLink to="/posts" activeClassName="active">
                <div className="navbar-heading">
                    <BsFilePost/>
                </div>
            </NavLink>
            <NavLink to="/comments" activeClassName="active">
                <div className="navbar-heading">
                    <BiCommentDetail />
                </div>
            </NavLink>
            <NavLink to="/albums" activeClassName="active">
                <div className="navbar-heading">
                    <BiFilm />
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar
