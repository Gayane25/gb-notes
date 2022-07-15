import React, {useState} from 'react';
import { projectAuth } from '../firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import {loginAsync} from "../redux/asyncActions";
import {useDispatch, useSelector} from "react-redux";

function LoginForm() {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    const user = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let token;
    const handleSignIn = ()=>{
      dispatch(loginAsync(email,pass))
      navigate("/dashboard");
      console.log(user);
      
    }
  return (
    <div>
       <Input value={email} onChange={(e)=>setEmail(e.target.value)} name ="Email"/> 
       <Input value={pass} onChange={(e)=>setPass(e.target.value)} name ="Password"/>
       <button onClick={handleSignIn}>Login</button>
    </div>
  )
}

export default LoginForm;