import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQCkguT4LEVJzAPUnE8edEYXJ6MP9M9kM",
  authDomain: "instagram-reels-clone-dd86e.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-dd86e.firebaseio.com",
  projectId: "instagram-reels-clone-dd86e",
  storageBucket: "instagram-reels-clone-dd86e.appspot.com",
  messagingSenderId: "270853183495",
  appId: "1:270853183495:web:22ffdcee079e29db3cf2a2",
  measurementId: "G-3FL7GDEQWD",
});

const db = firebaseApp.firestore();
export { db };
