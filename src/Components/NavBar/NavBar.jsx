import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { BsFilePost } from 'react-icons/bs';
import { BiCommentDetail, BiFilm, BiHomeCircle, BiUser } from "react-icons/bi";
import {IoIosPhotos} from "react-icons/io"
import {RiTodoFill} from "react-icons/ri"

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
            <NavLink to="/photos" activeClassName="active">
                <div className="navbar-heading">
                    <IoIosPhotos />
                </div>
            </NavLink>
            <NavLink to="/todos" activeClassName="active">
                <div className="navbar-heading">
                    <RiTodoFill />
                </div>
            </NavLink>
            <NavLink to="/users" activeClassName="active">
                <div className="navbar-heading">
                    <BiUser />
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar
