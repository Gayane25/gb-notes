import { loginCreator } from "./authReducer";
import {projectAuth} from "../firebase/firestore"

export const authAsync = (email, pass)=>{
    let response;
    return async (dispatch)=>{
        if(email && pass){
            await projectAuth.createUserWithEmailAndPassword(email, pass);
            const token = await response.user.Aa;
            console.log(token)
            if(token){
                localStorage.setItem("user", JSON.stringify(response.user));
            }
            dispatch(loginCreator(response));
            
        }
      
    }
}

export const loginAsync = (email, pass)=>{
    let response;
    return async (dispatch)=>{
        if(email && pass){
            response = await projectAuth.signInWithEmailAndPassword(email, pass);
            const token = await response.user.Aa;
            console.log(token)
            if(token){
                localStorage.setItem("user", JSON.stringify(response.user));
            }
            dispatch(loginCreator(response));
            
        }
       
      
       
    }
}

// const token =  s;
//             console.log(token)
//             if(token){
//                
//             } 