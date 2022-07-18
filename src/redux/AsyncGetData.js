import { putNotesInState, showNotes,  DELETE_NOTES } from "./notesReducer";
import { projectFireStore } from "../firebase/firestore";

export function asyncGetData() {
  return (dispatch) => {
    projectFireStore.collection("/notes").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) =>{
        dispatch(putNotesInState({ id: doc.id, ...doc.data() }))
      }
      );
    });
  };
}
export function asyncAddNote(note) {
  return async (dispatch) => {
    await projectFireStore.collection("/notes").add(note);
    dispatch(putNotesInState(note));
  };
}

export function deleteNote(noteId) {
  return async (dispatch) => {
    let query = projectFireStore.collection("notes").where("id", "==", noteId);
   await  query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
        dispatch({type: DELETE_NOTES,payload: doc.data()})
      });
    });
    // await projectFireStore.collection('notes').doc(noteId).delete();
    //
  };
}

// let query = projectFireStore.collection('notes').where('noteId','==', 'id');
// query.get().then(function(querySnapshot){
//     querySnapshot.forEach(function(doc){
//         doc.ref.delete();
//     });
// });

// var jobskill_query = db.collection('job_skills').where('job_id','==',post.job_id);
// jobskill_query.get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     doc.ref.delete();
//   });
// });

// .finally(() => {
//     db.collection("Items")
//       .get()
//       .then((querySnapshot) => {
//         const all = [];
//         querySnapshot.forEach((doc) => {
//           all.push(doc.data());
//         });
//         dispatch({
//           type: "get",
//           payload: all,
//         });
//       });
