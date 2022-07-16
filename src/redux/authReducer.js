export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const  USER_LOGGED = "USER_LOGGED";
// export const initialAuth = {}

export function authReducer(state={}, action){
    switch(action.type){
        case USER_LOGIN:{
            return {...state,  ...action.payload}
        }
        case USER_LOGGED :{
            return {...state, ...action.payload }
        } 
        // case USER_LOGOUT :{
           
        //      return state;
            
        // }
        default :{
            return state;
        }
    }
}

export const loginCreator = (payload)=>({type:USER_LOGIN, payload});
export const loggedUser = (payload)=>({type:USER_LOGGED, payload});
// export const logOutUser = ()=>({type:USER_LOGOUT });
