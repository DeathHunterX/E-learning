import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link} from 'react-router-dom'
import { login } from '../../redux/actions/authAction'

const LoginFunction = () => {
    const dispatch = useDispatch()

    const initialState = { email: "", password: "" }
    
    const [loginData, setLoginData] = useState(initialState)
    const {email, password} = loginData

    const [typePass, setTypePass] = useState(false)

    
    
    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(loginData)
        dispatch(login(loginData))
    }

    return (
        <div className="auth_page login">
            <form 
          onSubmit={handleSubmit}
            >
                <div className="auth_page_title">
                    <h3 className="text-center">Welcome Back</h3>
                </div>
                
                <div className="auth_page_body">
                    <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} 
                    />

                    <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                    </div>
                    <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="pass">
                        <input 
                        type={typePass ? "text" :"password"} 
                        className="form-control" id="exampleInputPassword1" name="password"
                        onChange={handleChangeInput} value={password} 
                        />
                        <small onClick={() => setTypePass(!typePass)}>
                        {typePass  ? 'Hide' : 'Show'}
                        </small>
                    </div>
                    </div>
                    
                    <div className="d-flex justify-content-end mb-4">
                        <small><Link to="/forgotPassword">Forgot Password?</Link></small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 mt-3"
                    disabled={email && password ? false : true}
                    >
                    Login
                    </button>

                    
                    <p className="my-2 mt-4">You don't have an account? <Link to="/register">Register Now</Link></p>
                </div>
            </form>      
        </div>
    )
}

export default LoginFunction