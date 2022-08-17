import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Avatar from '../Avatar'

import AvatarImg from '../../images/avatar.jpg'

import { logout } from '../../redux/actions/authAction'

const Header = () => {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()

    const navLinks = [
        {id: 'home', label: 'Home', path: '/'},
        {id: 'course', label: 'Course', path: '/course'},
        {id: 'about', label: 'About', path: '/about'},
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

                {auth.token ?  
                <li className="nav-item px-2 dropdown">
                    <span className="nav-link" id="navbarDropdown" 
                    role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Avatar src={AvatarImg} size="medium-avatar"/>
                    </span>
                    
                    <div className="dropdown-menu avatar-menu" aria-labelledby="navbarDropdown">
                        <span className="text-muted ms-2">Account</span>
                        <Link className="dropdown-item" to={`/dashboard`}>Dashboard</Link>
                        <Link className="dropdown-item" to={`/profile`}>My Profile</Link>
                        <hr className="dropdown-divider"/>
                        <span className="text-muted ms-2">Instructor</span>
                        <Link className="dropdown-item" to={`/my-course`}>My Course</Link>
                        <hr className="dropdown-divider"/>
                        <Link className="dropdown-item" to={`/settings/`}>Settings</Link>
                        <Link className="dropdown-item" to="/"
                        onClick={() => dispatch(logout())}
                        >
                            Log Out
                        </Link>
                    </div>
                </li>
                :
                <li className="nav-item px-2 loginRegister">
                <Link className="nav-link" to={"/login"}>
                    Sign In/Sign up
                </Link>
                </li> }
                
            </ul>
        </nav>
    </div>
  )
}

export default Header