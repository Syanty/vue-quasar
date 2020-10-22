// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCDiyKNGoqoT1xrAy6ZZEOPMSqD7U9MyxM",
  authDomain: "awesome-todo-4eef8.firebaseapp.com",
  databaseURL: "https://awesome-todo-4eef8.firebaseio.com",
  projectId: "awesome-todo-4eef8",
  storageBucket: "awesome-todo-4eef8.appspot.com",
  messagingSenderId: "196229539909",
  appId: "1:196229539909:web:0b2a45c07c4d2552e39b2c",
  measurementId: "G-XK9S7V8X7T"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
