import React from 'react'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
    FaUserCircle,
    FaTachometerAlt,
    FaUserGraduate,
    FaLayerGroup

} from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

import { logout } from '../../redux/actions/authAction'


const LeftSide = ({pathname}) => {
    const dispatch = useDispatch()

    
    const isActive = (pn) => {
        if (pn === pathname) return 'active' 
        else return 'link-dark'
    }

    
    return (
        <div className="profile_option_list">
            <ul className="nav nav-pills flex-column mb-auto">
                <h6 className="text-muted mt-3 ms-1">Account</h6>
                <li className="nav-item">
                    <Link to="/dashboard" className={`nav-link ${isActive("/dashboard")}`}>
                        <FaTachometerAlt /> Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className={`nav-link ${isActive("/profile")}`}>
                        <FaUserCircle /> My Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/enrolled" className={`nav-link ${isActive("/enrolled")}`}>
                        <FaLayerGroup /> Enrolled Course
                    </Link>
                </li>
                <hr />
                <h6 className="text-muted ms-1">Instructor</h6>
                <li className="nav-item">
                    <Link to="/my-courses" className={`nav-link ${isActive("/my-courses")}`}>
                        <FaUserGraduate /> My Course
                    </Link>
                </li>
                <hr />
                <li className="nav-item">
                    <Link to="/settings" className={`nav-link ${isActive("/settings")}`}>
                        <BsGearFill /> Settings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-dark" to="/"
                    onClick={() => dispatch(logout())}
                    >
                        <FiLogOut/> Log Out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftSide