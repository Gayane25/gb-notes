import React, {useState} from 'react';
import { projectAuth } from '../firebase/firestore';
import Input from './Input';

function LoginForm() {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    const handleSignIn = ()=>{
        if(email && pass){
            projectAuth.signInWithEmailAndPassword(email, pass);

        }
       
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