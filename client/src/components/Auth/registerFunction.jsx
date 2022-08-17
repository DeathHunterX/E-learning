import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../redux/actions/authAction'


const RegisterFunction = () => {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()

    const initialState = { 
        username: '',
        fullname: '',
        email: '', 
        password: '',
        cf_password: '',
    }
    const [registerData, setRegisterData] = useState(initialState)
    const { username, fullname, email, password, cf_password } = registerData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setRegisterData({...registerData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(registerData)
        dispatch(register(registerData))
    }
    return (
        <div className="auth_page register">
            <form onSubmit={handleSubmit}>
                <div className="auth_page_title">
                    <h3 className="text-center">Sign Up</h3>
                    <p className="text-center">Some interesting course just for you, so don't get us wait!</p>
                </div>
                <div className="auth_page_body">

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="username" name="username"
                        onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')} 
                        style={{background: `${alert.username ? "#fd2d6a14" : ""}`}} 
                        />

                        <small className="form-text text-danger">
                            {alert.username ? alert.username : ""}
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullname" name="fullname"
                        onChange={handleChangeInput} value={fullname}
                        style={{background: `${alert.fullname ? "#fd2d6a14" : ""}`}} 
                        />

                        <small className="form-text text-danger">
                            {alert.fullname ? alert.fullname : ""}
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                        onChange={handleChangeInput} value={email} 
                        style={{background: `${alert.email ? "#fd2d6a14" : ""}`}} 
                        />

                        <small className="form-text text-danger">
                            {alert.email ? alert.email : ""}
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="pass">
                            <input type={typePass? "text" : "password"} 
                            className="form-control" id="exampleInputPassword1" name="password"
                            onChange={handleChangeInput} value={password} 
                            style={{background: `${alert.password ? "#fd2d6a14" : ""}`}} 
                            />

                            <small onClick={() => setTypePass(!typePass)}>
                                {typePass  ? 'Hide' : 'Show'}
                            </small>
                        </div>

                        <small className="form-text text-danger">
                            {alert.password ? alert.password : ""}
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="retypePassword" className="form-label">Confirm Password</label>
                        <div className="pass">
                            <input type={typeCfPass? "text" : "password"} 
                            className="form-control" id="retypePassword" name="cf_password"
                            onChange={handleChangeInput} value={cf_password} 
                            style={{background: `${alert.cf_password ? "#fd2d6a14" : ""}`}} 
                            />
                            
                            <small onClick={() => setTypeCfPass(!typeCfPass)}>
                                {typeCfPass  ? 'Hide' : 'Show'}
                            </small>
                        </div>

                        <small className="form-text text-danger">
                            {alert.cf_password ? alert.cf_password : ""}
                        </small>
                        
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3"
                    // disabled={username && fullname && email && password ? false : true}
                    >
                        Register
                    </button>
                    <p className="my-2 mt-4">Already have an account? <Link to="/login">Login Now</Link></p>
                </div>
            </form>      
        </div>
    )
}

export default RegisterFunction