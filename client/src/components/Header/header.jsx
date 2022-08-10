import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const navLinks = [
        {id: 'home', label: 'Home', path: '/'},
        {id: 'course', label: 'Course', path: '/browseJobs'},
        {id: 'about', label: 'About', path: '/lists'},
    ]
  return (
    <div className="header bg-light">
        <nav className="navbar container navbar-light bg-light">
            <div className="logo">
                <Link to="/" className="d-flex">
                    <h1 className="navbar-brand mt-2">Logo</h1>
                </Link>
            </div>
            <ul className="navbar-nav flex-row ms-auto">
                {navLinks.map((link, idx) => {
                    return (
                        <li className={`nav-item px-2 ${link.id}`} key={idx}>
                            <Link className="nav-link" to={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
                <li className="nav-item px-2 loginRegister">
                    <Link className="nav-link" to={"/login"}>
                        Sign In/Sign up
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header