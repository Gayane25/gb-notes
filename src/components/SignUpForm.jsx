import React, {useState} from 'react';
import { projectAuth } from '../firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Input from './Input';
import {authAsync} from "../redux/asyncActions";


function SignUpForm() {

    const [email, setEmail]= useState("");
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
     const user = useSelector(state=>state.auth);
   
    const handleSignUp = ()=>{
      dispatch(authAsync(email, pass));
      navigate("/dashboard")
      console.log(user)
      

        // if(email && pass){
        //     projectAuth.createUserWithEmailAndPassword(email, pass).then(res=>console.log(res))
        // }
    }

   
  return (
    <div>
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} name ="Email" />
        <Input value={pass} onChange={(e)=>setPass(e.target.value)} name ="Password"/>
        <button onClick ={handleSignUp}>SignUp</button>

    </div>
  )
}

export default SignUpForm