import React from 'react'
import 
{  
    FaCheck
} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib';

import Image from '../../../images/image01.jpg'

function BlueIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'blue'}}
      >
        <FaCheck />
      </IconContext.Provider>
    );
  }
const RightSide = () => {
  return (
    <div className="container px-5 col-4">
        <div className="">
            <div className="image">
                <img src={Image} alt="images" width={"100%"}/>
            </div>
            <div className="d-grid gap-2 col-12 my-4">
                <button className="btn btn-primary">Continue Course</button>
                <button className="btn btn-primary" disabled>Complete Course</button>
            </div>
            <div className="mt-4">
                <h3 className="my-3">Material Includes</h3>
                <p>{BlueIcon()} 22 hours on-demand video</p>
                <p>{BlueIcon()} 2 articles</p>
                <p>{BlueIcon()} 23 downloaded resources</p>
                <p>{BlueIcon()} Full lifetime access</p>
                <p>{BlueIcon()} Access on TV and mobile</p>
                <p>{BlueIcon()} Certificate on Completion</p>
            </div>
            <br />
            <div className="my-1">
                <hr />
                <p>You have been enrolled on February 17, 2022</p>
                <hr />
            </div>
        </div>
        <>
            <h3 className="my-3">Requirement</h3>
            <p>{BlueIcon()} HTML, CSS</p>
            <p>{BlueIcon()} JavaScript</p>
            
        </>

        <>
            <h3 className="my-3">Target Audience</h3>
            <p>{BlueIcon()} Total Beginners</p>
            
        </>
    </div>
  )
}

export default RightSide