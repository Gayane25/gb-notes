export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export function authReducer(state={}, action){
    switch(action.type){
        case USER_LOGIN:{
           
            return {...state, auth: action.payload}
        }
        default :{
            return state;
        }
    }
}

export const loginCreator = (payload)=>({type:USER_LOGIN, payload});
