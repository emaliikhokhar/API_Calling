import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './Albums.css'

const Albums = () => {
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <div className="body-of-albums">
            Albums
            </div>
        </div>
    )
}

export default Albums