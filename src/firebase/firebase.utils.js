import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const api_key={
    apiKey: "AIzaSyCAs616Xcdlazzjp6B6v0e0BJZEpupolx0",
    authDomain: "corner-e-commerce.firebaseapp.com",
    databaseURL: "https://corner-e-commerce.firebaseio.com",
    projectId: "corner-e-commerce",
    storageBucket: "corner-e-commerce.appspot.com",
    messagingSenderId: "788217112690",
    appId: "1:788217112690:web:f6fbe7fec4d03b90517aeb"

}

firebase.initializeApp(api_key);

export const auth=firebase.auth();
export const firestore=firebase.firestore();
export default firebase;