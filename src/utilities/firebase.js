import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

  const firebaseConfig = {
    apiKey: "AIzaSyBi3Vat5tvRsrsXQYxq6arKyFq7i7jWg78",
    authDomain: "vue3-multi-app.firebaseapp.com",
    projectId: "vue3-multi-app",
    storageBucket: "vue3-multi-app.appspot.com",
    messagingSenderId: "60203185472",
    appId: "1:60203185472:web:b607f927b60b25f36436a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export const chatsRef = db.ref("chats");

  export default firebase;