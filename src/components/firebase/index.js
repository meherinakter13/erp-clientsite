import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjqdrXY_6BpZjF6uUkjoJjCMMogdhtjow",
    authDomain: "image-upload-41b87.firebaseapp.com",
    projectId: "image-upload-41b87",
    storageBucket: "image-upload-41b87.appspot.com",
    messagingSenderId: "325135434812",
    appId: "1:325135434812:web:f4fe3dedcb6f15f72def39"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };