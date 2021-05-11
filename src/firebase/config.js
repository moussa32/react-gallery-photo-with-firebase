import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDalpMT8XEzw3yDRV3n09JfPsRdNp2NW2g",
  authDomain: "photo-gallery-54c05.firebaseapp.com",
  projectId: "photo-gallery-54c05",
  storageBucket: "photo-gallery-54c05.appspot.com",
  messagingSenderId: "92956820114",
  appId: "1:92956820114:web:18627e4d4bf7d6cf8e5c4b"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };