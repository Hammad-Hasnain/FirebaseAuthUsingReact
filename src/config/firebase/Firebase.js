// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDctRA0pcm71OSYNHcdPA2bvgk5XgAYW8Q",
    authDomain: "reactappwithauth.firebaseapp.com",
    projectId: "reactappwithauth",
    storageBucket: "reactappwithauth.appspot.com",
    messagingSenderId: "178973897922",
    appId: "1:178973897922:web:292af8fe5599523bc3b75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {
    auth,
    
}