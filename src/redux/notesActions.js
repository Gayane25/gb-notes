import { putNotesInState, DELETE_NOTES } from "./notesReducer";
import { projectFireStore } from "../firebase/firestore";

export function asyncGetData() {
  return (dispatch) => {
    try {
      projectFireStore.collection("/notes").onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          dispatch(putNotesInState({ id: doc.id, ...doc.data() }));
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function asyncAddNote(note) {
  return async (dispatch) => {
    try {
      await projectFireStore.collection("/notes").add(note);
      dispatch(putNotesInState(note));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteNote(noteId) {
  return async (dispatch) => {
    try {
      let query = projectFireStore
        .collection("notes")
        .where("id", "==", noteId);
      await query.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
          dispatch({ type: DELETE_NOTES, payload: doc.data() });
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
