import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginFunction from '../components/Auth/loginFunction'

const Login = () => {
  const {auth} = useSelector(state => state)
  const navigate = useNavigate()

  //handle the token when refresh page
  useEffect(() => {
    if(auth.token) navigate("/")
  }, [auth.token, navigate])

  return (
    <LoginFunction />
  )
}

export default Login