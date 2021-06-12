// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxKP_MNY4lH5umvLdg7niGc_OyjhOofmo",
    authDomain: "clone-9aa6c.firebaseapp.com",
    projectId: "clone-9aa6c",
    storageBucket: "clone-9aa6c.appspot.com",
    messagingSenderId: "284255695407",
    appId: "1:284255695407:web:ae353759d80410202dccda",
    measurementId: "G-CZFTRX6RS6"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  const auth=firebase.auth();

  export {  db  ,  auth  };