import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut  } from "firebase/auth";

export const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyD9d26iOjE3vh1GuKq9rAhhW_YVihMoN7o",
    authDomain: "lewis-app-65376.firebaseapp.com",
    projectId: "lewis-app-65376",
    storageBucket: "lewis-app-65376.appspot.com",
    messagingSenderId: "992225823219",
    appId: "1:992225823219:web:895d21cd2d2300222f6a86",
    measurementId: "G-4VFR38T7WV"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export {
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
}