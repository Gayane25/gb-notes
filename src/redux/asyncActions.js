import { loginCreator,loggedUser,logOutUser } from "./authReducer";
import {projectAuth} from "../firebase/firestore"

export const authAsync = (email, pass)=>{
    return async (dispatch)=>{
        try {
            if(email && pass){
                await projectAuth.createUserWithEmailAndPassword(email, pass).then(res=> dispatch(loginCreator(res)));
                projectAuth.onAuthStateChanged((currentUser)=>{
                    dispatch(loggedUser(currentUser))
                  })
               }
        } catch(error){
            console.log(error.message)
        }
       
      
    }
}
export const loginAsync = (email, pass)=>{
    return async (dispatch)=>{
        try {
            if(email && pass){
                await projectAuth.signInWithEmailAndPassword(email, pass).then(res=> dispatch(loginCreator(res)));
                projectAuth.onAuthStateChanged((currentUser)=>{
                    dispatch(loggedUser(currentUser))
                  })
               }
        } catch(error){
            console.log(error.message)
        }
       
        
    }
}

// export const logout = async ()=>{
//      await projectAuth.signOut();
    
    

// }



// const token =  s;
//             console.log(token)
//             if(token){
//                
//             } 