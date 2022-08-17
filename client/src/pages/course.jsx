import React, {useState} from 'react'

import {FaFilter} from "react-icons/fa"



import Result from '../components/Course/CourseList/Result'
import Filter from '../components/Course/Filter'



const Course = () => {
  const [onFilter, setOnFilter] = useState(false)
  return (
    <div className="container">
      <h1>All Course</h1>
      <p>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  
      </p>
      <div className="">
        <button className="btn btn-outline-secondary"
        onClick={() => setOnFilter(prev => !prev )}>
          <FaFilter/> Filter
        </button>
        <button className="btn btn-outline-secondary dropdown-toggle ms-3" data-bs-toggle="dropdown" aria-expanded="false">
          Sorting by
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item">Most Popular</li>
          <li className="dropdown-item">Newest</li>
          <li className="dropdown-item">Highest Rated</li>
        </ul>

      </div>

      <div className="row mt-4">
        <div className="container col-3">
          {onFilter && <Filter />} 
        </div>

        <div className={`container  ${onFilter ? "col-9" : "col-12"}`}>
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </div>
      </div>

    </div>
  )
}

export default Course