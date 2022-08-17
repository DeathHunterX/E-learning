import React, {useState, useEffect} from 'react'
import { FaCamera, FaEye, FaFacebook, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'

import AvatarImg from '../../images/avatar.jpg'
import { BASE_URL } from '../../utils/config'

import { checkImage } from '../../utils/imgUpload'

const Profile = () => {
    const initialState = {
        fullname: '', header: '', address: '', description: ''
    }

    const [userData, setUserData] = useState(initialState)
    const { fullname, header, address, description } = userData

    const [avatar, setAvatar] = useState('')

    // const { auth } = useSelector(state => state)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     setUserData(auth.user)
    // }, [auth.user])




    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        // if(err) return dispatch({
        //     type: GLOBALTYPES.ALERT,
        //     payload: {error: err}
        // })
        setAvatar(file)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(updateProfileUser({userData, avatar, auth}))
    }
    return (
        <div className="edit_profile container px-5 py-3">
            <div className="d-flex justify-content-between">
                <h1>Profile</h1>
                <button className="btn btn-outline-primary h-25" style={{margin: "auto 0"}}><FaEye/> View current profile</button>
            </div>
            
            <form onSubmit={handleSubmit} >
                <div className="row">

                <div className="leftSide col-7">
                    <div className="form_group mb-3">
                        <label htmlFor="fullname">Full Name</label>
                        <div className="position-relative">
                            <input type="text" className="form-control" id="fullname"
                            name="fullname" value={fullname} onChange={handleInput} />
                            <small className="text-danger position-absolute" 
                            style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                                {fullname.length}/25
                            </small>
                        </div>
                    </div>

                    <div className="form_group mb-3">
                        <label htmlFor="mobile">Header</label>
                        <div className="position-relative">
                            <input type="text" className="form-control" id="header"
                            name="header" value={header} onChange={handleInput} />
                        </div>
                    </div>

                    <div className="form_group mb-3">
                        <label htmlFor="address">Address</label>
                        <div className="position-relative">
                            <input type="text" className="form-control" id="address"
                            name="address" value={address} onChange={handleInput} />
                        </div>
                    </div>

                    <div className="form_group mb-3">
                        <label htmlFor="description">About Me (Description)</label>
                        <div className="position-relative">
                            <textarea className="form-control" id="description" cols="30" rows ="10"
                            name="description" value={description} onChange={handleInput} />
                            <div className="d-flex justify-content-between">

                            <small className="text-muted d-block">
                                Links and coupon codes are not permitted in this section
                            </small>

                            <small className="text-danger d-block">
                                {description.length}/5000
                            </small>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="rightSide col-5">
                    <div className="info_avatar">
                        {/* <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} 
                        alt="avatar"/> */}
                        <img src={avatar ? URL.createObjectURL(avatar) : AvatarImg} 
                        alt="avatar"/>
                        <span>
                            <FaCamera />
                            <p>Change</p>
                            <input type="file" name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                        </span>
                    </div>

                    <div className="form_group mb-3">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Twitter</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text"><span><FaLink/></span> </div>
                        </div>
                        <div className="input-group-text" style={{backgroundColor: "none"}}> <span>{BASE_URL}/profile/01</span> </div>
                    </div>
                    </div>

                    <div className="form_group mb-3">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Twitter</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text"><span><FaTwitter/></span> </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Twitter Link" />
                    </div>
                    </div>

                    <div className="form_group mb-3">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Linkedin</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text"><span><FaLinkedin/></span> </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Linkedin Link" />
                    </div>
                    </div>

                    <div className="form_group mb-3">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Facebook</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text"><span><FaFacebook/></span> </div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Facebook Link" />
                    </div>
                    </div>
                </div>

                </div>
                <button className="btn btn-info w-100 text-white" type="submit">Save</button>

            </form>

        </div>
    )
}

export default Profile