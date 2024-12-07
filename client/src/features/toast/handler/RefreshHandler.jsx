import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RefreshHandler({setIsAuthenticated}) {
    const loaction = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsAuthenticated(true)
            if(loaction.pathname === '/'||
            loaction.pathname === '/login'||
            loaction.pathname === '/signup'){
                navigate('/',{replace:false})
            }
        }
    },[location,navigate,setIsAuthenticated])
  return (
    null
  )
}
