import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBj89qtBuQKOt1LZTYevZcEN_hMF6owsxU",
    authDomain: "my-app-e5f0a.firebaseapp.com",
    projectId: "my-app-e5f0a",
    storageBucket: "my-app-e5f0a.appspot.com",
    messagingSenderId: "944083838090",
    appId: "1:944083838090:web:442819afba95393fad3973",
    measurementId: "G-DXQ786C8RB"
  };
  if(firebase.apps.length ==0){
    firebase.initializeApp(firebaseConfig);
  }

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  export const google= new firebase.auth.GoogleAuthProvider();


   