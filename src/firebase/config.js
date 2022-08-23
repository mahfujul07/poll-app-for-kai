import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE9FCdJS1jvL-PwyO3sGJ2aqheBJu_b88",
  authDomain: "poll-maker-mahfuz.firebaseapp.com",
  projectId: "poll-maker-mahfuz",
  storageBucket: "poll-maker-mahfuz.appspot.com",
  messagingSenderId: "787110485287",
  appId: "1:787110485287:web:4b0bd5f42e35a7bdd31d02",
  measurementId: "G-47BJZ0E393",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
