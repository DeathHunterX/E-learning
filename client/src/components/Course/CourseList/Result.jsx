import React from 'react'
import { Link } from 'react-router-dom'
import image01 from '../../../images/image01.jpg'
const Result = () => {
  return (
    <div>
        <div 
      // key={post._id}
      >
        <Link to={`/course/01`} className ="text-dark">
          <div className="card my-3">
            <div className="card_body">
                <div className="card_body-content d-flex">
                    <img src={image01} alt="image01" width={"20%"} />
                    <div>
                        <h6>Course 1</h6>
                        <p>Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!</p>
                        <p>Harry Grider</p>
                        <small>22.5 total hours - 494 lectures - All level</small>
                    </div>
                </div>
            </div>
          </div>
        </Link>
        <hr style={{margin: '20px 0'}}></hr>
      </div>
    </div>
  )
}

export default Result