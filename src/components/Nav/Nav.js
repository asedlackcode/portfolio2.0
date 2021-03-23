import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
    return (
        <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" to="/home" activeClassName="activePage">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/skills" activeClassName="activePage">Skills</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="activePage">Contact</NavLink>
            </li>
        </ul>
        </>
    )
}
