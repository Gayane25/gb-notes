export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const  USER_LOGGED = "USER_LOGGED";
export const initialAuth = {
    isLogged:false
};
export function authReducer(state=initialAuth, action){
    switch(action.type){
        case USER_LOGIN:{
            return {...state,  ...action.payload}
        }
        case USER_LOGGED :{
            return {...state, isLogged:true }
        }
        default :{
            return state;
        }
    }
}

export const loginCreator = (payload)=>({type:USER_LOGIN, payload});
export const loggedUser = ()=>({type:USER_LOGGED})
