import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'


import Profile from './Profile'

const RightSide = ({pathname}) => {

  return (
    <div>
      {/* Dashboard */}
      {
        pathname === "/dashboard" 
        &&
        <div className="">
          Dashboard
        </div>
      }

      {
        pathname === "/profile" 
        && 
        <Profile />
      }
      {/* {
        pathname = "/enrolled" 
        && 
        <div className="">
          Enrolled Course
        </div>
      }
      {
        pathname = "/my-courses" 
        && 
        <div className="">
          My Course
        </div>
      } */}

    </div>
  )
}

export default RightSide