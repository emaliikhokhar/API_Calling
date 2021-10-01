import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './Intro.css'

const Intro = () => {
    return (
        <div className="navBar-and-body">
            <div>
                <NavBar />
            </div>
            <div className="body-of-intro">
                <div>
                    <h3>You can see all the API's from JSONPlaceholder</h3>
                </div>
            </div>
        </div>
    )
}

export default Intro