
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBN5yT3lXdF2gxiqjvmG_SOSwiisugSh4Q",
    authDomain: "my-ebookstore.firebaseapp.com",
    databaseURL: "https://my-ebookstore.firebaseio.com",
    projectId: "my-ebookstore",
    storageBucket: "my-ebookstore.appspot.com",
    messagingSenderId: "1029667544372",
    appId: "1:1029667544372:web:b4ca611fcec567fe449961",
    measurementId: "G-Q1V9S880PN"
};
export const firebaseConfig = firebase.initializeApp(config);