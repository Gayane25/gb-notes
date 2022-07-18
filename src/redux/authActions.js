import { projectAuth } from "../firebase/firestore";
import { loginCreator, loggedUser } from "./authReducer";

export const authAsync = (email, pass) => {
  return async (dispatch) => {
    try {
      if (email && pass) {
        await projectAuth
          .createUserWithEmailAndPassword(email, pass)
          .then((res) => dispatch(loginCreator(res)));
        projectAuth.onAuthStateChanged((currentUser) => {
          dispatch(loggedUser(currentUser));
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const loginAsync = (email, pass) => {
  return async (dispatch) => {
    try {
      if (email && pass) {
        await projectAuth
          .signInWithEmailAndPassword(email, pass)
          .then((res) => dispatch(loginCreator(res)));
        projectAuth.onAuthStateChanged((currentUser) => {
          dispatch(loggedUser(currentUser));
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
