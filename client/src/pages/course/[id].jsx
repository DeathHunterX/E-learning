import React from 'react'
import LeftSide from '../../components/Course/CourseDetail/LeftSide';
import RightSide from '../../components/Course/CourseDetail/RightSide';

const DetailedCourse = () => {
  return (
    <div className="detailCourse row">
        <LeftSide />

        <RightSide />
    </div>
  )
}

export default DetailedCourse