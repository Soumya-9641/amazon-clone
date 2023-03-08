// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
//import firebase from "firebase/app";
//import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA20SbOr6etuJ__4B7GpYaiab2X2r9UN3I",
    authDomain: "clone-4babd.firebaseapp.com",
    databaseURL:"https://clone-4babd-default-rtdb.firebaseio.com/",
    projectId: "clone-4babd",
    storageBucket: "clone-4babd.appspot.com",
    messagingSenderId: "286268624032",
    appId: "1:286268624032:web:3c9fd53169a2af1fbe8dc5",
    measurementId: "G-6SPKXZGC8N"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(firebaseApp);

  export {db , auth};