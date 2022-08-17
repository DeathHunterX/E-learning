import React from 'react'
import 
{  
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaCheck
} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib';
function BlueIcon() {
    return (
        <IconContext.Provider
        value={{ color: 'blue'}}
        >
        <FaCheck />
        </IconContext.Provider>
    );
}
const LeftSide = () => {
  return (
    <div className="container px-5 col-8">
        <h2 className="courseTitle">ReactJS Tutorial For Beginner</h2>
        <div className="d-flex my-3 justify-content-between">
            <p>by <strong>Name</strong></p>
            <p>Course level: <strong>Intermediate</strong></p>
            <div className="d-flex shared">
                <p>Share: </p>
                <FaFacebookF className="ms-1"/>
                <FaTwitter className="ms-1"/>
                <FaLinkedin className="ms-1"/>
            </div>
        </div>
        <div className="row g-2">
            <div className="col-3">
                <div>Categories:</div>
            </div>
            <div className="col-3">
                <div>Estimate time:</div>
            </div>
            <div className="col-3">
                <div>Total enrolled</div>
            </div>
            <div className="col-3">
                <div>Last Update:</div>
            </div>
            <div className="col-3">
                <div><strong>Name</strong></div>
            </div>
            <div className="col-3">
                <div><strong>22h 30m</strong></div>
            </div>
            <div className="col-3">
                <div><strong>1</strong></div>
            </div>
            <div className="col-3">
                <div>Date</div>
            </div>
        </div>
        

        <>
            <h3 className="my-3">Course Status</h3>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>  
        </>

        <>
            <h3 className="my-3">About Course</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p> 
        </>

        <>
            <h3 className="my-3">Description</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </>

        <>
            <h3 className="my-3">What you'll learn</h3>
            <p>{BlueIcon()} You will learn React</p>
            <p>{BlueIcon()} You will learn React</p>
            <p>{BlueIcon()} You will learn React</p>
            <p>{BlueIcon()} You will learn React</p>
            <p>{BlueIcon()} You will learn React</p>
            <p>{BlueIcon()} You will learn React</p>
        </>

        <>
            <div className="d-flex justify-content-between my-3">
                <h3>Course Contents</h3>
                <div className="d-flex">
                    <p className="ms-4">7 Lessons</p>
                    <p className="ms-4">22h 30m</p>
                </div>
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>  
            </div>

        </>

        <>
            <h3 className="my-3">Instructor</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </>
    </div>
  )
}

export default LeftSide