import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA84iSRcnqTB0raqJff5HPrAW_JQFhVHEQ",
  authDomain: "complaint-forum-9c0a0.firebaseapp.com",
  projectId: "complaint-forum-9c0a0",
  storageBucket: "complaint-forum-9c0a0.appspot.com",
  messagingSenderId: "937810528691",
  appId: "1:937810528691:web:e4970f1231e838441b23c6",
  measurementId: "G-RZV0GN4T93",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
