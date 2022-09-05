import React, { useState } from 'react'
import CourseSideBar from '../components/courseSidebar'

const CourseCreate = () => {
    const [showForm, setShowForm] = useState(false)
    const onAddclick = () => setShowForm(showForm ? false : true)
    const CourseForm = () => {
        return (
            <div>
                <form className="m-2 p-3 border border-primary">
                    <div className="mb-3 form-group">
                        <label htmlFor="" className="h2 form-label">Lesson Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="h2 form-label" id="description">Estimated Duration (Hours)</label>
                        <input className=" form-control form-range w-auto" type="number" min="1" max="10" />
                    </div>
                    <div className="form-group">
                        <label className="h2 form-label" id="description">Lesson Content</label>
                        <textarea className="form-control" id="description" rows="5"></textarea>
                    </div>
                    <button className="mt-2 btn btn-outline-primary" type="submit">Add Lesson</button>
                </form>
            </div>
        )
    }
    return (
        <div className="p-3">
            <CourseSideBar />
            <form>
                <div className="form-group">
                    <h3 className="text-center">Create a Course</h3>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="" className="h3 form-label">Course Name</label>
                    <input type="text" className="form-control" />
                </div>
                <label htmlFor="" className="h3 form-label">Course Type</label>
                <div className="form-check form-group">
                    <input type="radio" name="courseType" id="EN" value="EN" className="form-check-input" />
                    <label value="EN" className="form-check-label">English</label>
                </div>
                <div className="form-check form-group">
                    <input type="radio" name="courseType" id="IT" value="IT" className="form-check-input" />
                    <label value="IT" claclassss="form-check-label">IT</label>
                </div>
                <div className="form-check form-group">
                    <input type="radio" name="courseType" id="VN" value="VN" className="form-check-input" />
                    <label value="VN" className="form-check-label">Vietnamese</label>
                </div>
                <div className="form-group">
                    <label className="h3 form-label" id="description">Course Description</label>
                    <textarea className="form-control" id="description" rows="5"></textarea>
                </div>
            </form>
            <div className="form-group">
                <h3>Course Content</h3>
                <table className="table table-bordered w-full mx-auto border-black mt-3">
                    <thead>
                        <th className="bg-gray-900 text-center border border-black sticky top-0 p-2">Lesson Name</th>
                        <th className="bg-gray-900 text-center border border-black sticky top-0 p-2">Expected Duration (Hours)</th>
                        <th className="bg-gray-900 text-center border border-black sticky top-0 p-2">Remove Lesson</th>
                    </thead>
                    <tbody>
                        <td className="text-center px-4">Lesson 1</td>
                        <td className="text-center px-4">4 hours</td>
                        <td className="text-center text-red-500 hover:bg-red-500 hover:text-white transition-all p-2">Remove</td>
                    </tbody>
                </table>
            </div>
            <button type="button" className="m-2 btn btn-outline-primary" onClick={onAddclick}>Add new Lesson</button>
            {showForm ? <CourseForm /> : null}
        </div>
    )
}


export default CourseCreate