import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RegisterFunction from '../components/Auth/registerFunction'

const Register = () => {
  const {auth} = useSelector(state => state)
  const navigate = useNavigate()

  //handle the token when refresh page
  useEffect(() => {
    if(auth.token) navigate("/")
}, [auth.token, navigate])

  return (
    <RegisterFunction />
  )
}

export default Register