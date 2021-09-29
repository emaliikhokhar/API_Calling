import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './Intro.css'

const Intro = () => {
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar/>
            </div>
            <div className="body-of-intro">
            Welcome to API Calling Project
            </div>
        </div>
    )
}

export default Intro