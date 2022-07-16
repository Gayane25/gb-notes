import { loginCreator,loggedUser } from "./authReducer";
import {projectAuth} from "../firebase/firestore"

export const authAsync = (email, pass)=>{
    return async (dispatch)=>{
        if(email && pass){
         await projectAuth.createUserWithEmailAndPassword(email, pass).then(res=> dispatch(loginCreator(res))).then(dispatch(loggedUser()))
            
        }
      
    }
}

export const loginAsync = (email, pass)=>{
    return async (dispatch)=>{
        if(email && pass){
            await projectAuth.signInWithEmailAndPassword(email, pass).then(res=> dispatch(loginCreator(res))).then(dispatch(loggedUser()))
         
        }
        
    }
}



// const token =  s;
//             console.log(token)
//             if(token){
//                
//             } 