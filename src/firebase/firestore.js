import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyC65uqTfY87qnqGBrcJgYNY65-yjIiofjs",
    authDomain: "beeweb-task-354af.firebaseapp.com",
    projectId: "beeweb-task-354af",
    storageBucket: "beeweb-task-354af.appspot.com",
    messagingSenderId: "986642471585",
    appId: "1:986642471585:web:4a84e28c9d1dec5f6aeee0"
  };

  firebase.initializeApp(firebaseConfig);
  const projectFireStore = firebase.firestore();
  const projectAuth = firebase.auth()


  export {projectFireStore, projectAuth};