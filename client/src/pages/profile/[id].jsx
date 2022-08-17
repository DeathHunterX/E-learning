import React from 'react'
import Avatar from '../../components/Avatar'
import AvatarImg from '../../images/avatar.jpg'

import { FaFacebook, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'

const ProfileCurrent = () => {
  return (
    <div className="profile-big-container02 container p-5">
      <div className="d-flex justify-content-center">
        <div className="left-side ps-3">
          <h5 className="text-muted">INSTRUCTOR</h5>
          <h2>Dr. Name</h2>
          <p>Developer and Lead Instructor</p>
          <small>Logo Instructor Partner</small>
          <div className="d-flex">
            <div className="d-block text-center">
              <div><strong>123.456</strong></div>
              <div><strong className="text-muted">Total Students</strong></div>
            </div>
            <div className="d-block text-center ms-4">
              <div><strong>31.456</strong></div>
              <div><strong className="text-muted">Reviews</strong></div>
            </div>
          </div>
          <h5>About Me</h5>
          <p>
            Nunc eget pellentesque dui. Maecenas porttitor ultricies turpis, id commodo tortor feugiat a. Nulla congue faucibus ligula, a tincidunt nunc sollicitudin a. Donec fringilla nulla nec imperdiet suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam bibendum nulla in ante cursus ornare. Integer ex erat, porta in ipsum varius, faucibus gravida tortor. Donec sit amet sem sapien. Phasellus congue diam congue, tempus mauris non, feugiat neque. Fusce at tincidunt turpis. Sed ut nunc dolor. Aenean rutrum lobortis aliquet. Ut convallis tincidunt diam sit amet bibendum. Praesent pulvinar tempor neque. Vestibulum suscipit urna quis tincidunt condimentum.
            
          </p>

          <h5>My Course</h5>
        </div>
        <div className="right-side">
          <div className="avatar">
            <Avatar src={AvatarImg} size="massive-avatar" />
          </div>

          <div className="social-btn">
            <button className="btn btn-outline-primary w-100 mt-4"><FaLink /> Website</button>
            <button className="btn btn-outline-primary w-100 mt-2"><FaTwitter/> Twitter</button>
            <button className="btn btn-outline-primary w-100 mt-2"><FaLinkedin/> Linkedin</button>
            <button className="btn btn-outline-primary w-100 mt-2"><FaFacebook/> Facebook</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileCurrent