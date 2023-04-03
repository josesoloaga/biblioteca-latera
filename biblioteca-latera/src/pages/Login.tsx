import React, { useEffect } from "react";
import Login from "../ui/features/login/login-component";
import { useAppContext } from "../config-adapters/context-provider";
import { useNavigate } from "react-router-dom";

const LoginPage = ()=> {
    const { user} = useAppContext()
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/home')
        }
    
// eslint-disable-next-line react-hooks/exhaustive-deps    
    },[user])
    return (
        <>
        <Login />
        </>
    );
    };


export default LoginPage;