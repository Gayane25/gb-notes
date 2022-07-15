import React, {useState} from 'react';
import { projectAuth } from '../firebase/firestore';
import Input from './Input';

function SignUpForm() {
    const [email, setEmail]= useState("");
    const [pass, setPass] = useState("");
    const handleSignUp = ()=>{
        if(email && pass){
            projectAuth.createUserWithEmailAndPassword(email, pass).then(res=>console.log(res))
        }
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