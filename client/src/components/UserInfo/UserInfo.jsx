import React from 'react'
import { useLocation } from 'react-router-dom'

import Avatar from "../Avatar"
import AvatarImg from "../../images/avatar.jpg"

import {Rating} from "@mui/material"
import {MdAddCircle} from "react-icons/md"

import LeftSide from './LeftSide'
import RightSide from './RightSide'

const UserInfo = () => {
    const { pathname } = useLocation()

    return (
        <div className="profile-page container">
            <div className="profile">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="profile-container d-inline-flex align-items-center">
                        <div className="avatar">
                            <Avatar src={AvatarImg} size="supper-avatar" />
                        </div>
                        <div className="ms-3 profile-content">
                            <h2 className="username" style={{color: "blue"}}>Name</h2>

                            <Rating className="read-only" 
                            value={5}
                            precision={0.5} 
                            readOnly />
                            
                            <span>5.0 (32)</span>

                            <div className="profile-description">
                                <p style={{whiteSpace: "pre-line"}}>
                                {/* {
                                    user.description.length < 40
                                    ? user.description 
                                    : readMore ? user.description + ' ' : user.description.slice(0, 400) + ' .....'
                                }
                                
                                {
                                    user.description.length > 400 &&
                                    <span className="readMore text-primary" onClick={() => setReadMore(!readMore)} style={{cursor: "pointer"}}>
                                        {
                                            readMore ? ' Hide content ' : ' Read more '
                                        }
                                    </span>
                                } */}
                                    
                                </p> 
                            </div>
                        </div>
                        
                    </div>
                    <button className="btn btn-outline-primary h-25"><MdAddCircle /> Add a new course </button>
                </div>
            </div>
            
            <div className="profile-page-bot row">
                <div className="col-2 px-2 left-side">
                    <LeftSide pathname={pathname}/>
                </div>
                <div className="col-10 px-0 right-side">
                    <RightSide pathname={pathname}/>
                </div>
            </div>
            
        </div>

        
    )
}

export default UserInfo