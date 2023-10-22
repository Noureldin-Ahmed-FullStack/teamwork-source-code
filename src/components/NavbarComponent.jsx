import React from 'react'
import '../MyCss/MyCustomStylesheet.css'
import { Link, NavLink } from 'react-router-dom'


export default function NavbarComponent() {
    return (
        <nav className="navbar bold-text tealBG navbar-expand-lg navbar-dark py-4 ">
            <div className="container">
                <Link className="navbar-brand " to="">VetRo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link" to="FATIMA">FATIMA</NavLink>
                        <NavLink className="nav-link" to="PASSANT">PASSANT</NavLink>
                        {/* <NavLink className="nav-link" to="contact" >CONTACT</NavLink> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
