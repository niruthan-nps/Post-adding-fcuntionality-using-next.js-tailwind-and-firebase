// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "itpm-a6bba.firebaseapp.com",
//   projectId: "itpm-a6bba",
//   storageBucket: "itpm-a6bba.firebasestorage.app",
//   messagingSenderId: "159833453723",
//   appId: "1:159833453723:web:f693aa90d26f421972423e",
//   measurementId: "G-XW59TP33SX"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);


// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <-- Import firestore
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "itpm-a6bba.firebaseapp.com",
    projectId: "itpm-a6bba",
    storageBucket: "itpm-a6bba.firebasestorage.app",
    messagingSenderId: "159833453723",
    appId: "1:159833453723:web:f693aa90d26f421972423e",
    measurementId: "G-XW59TP33SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // <-- Use this for your firestore reference

// Initialize Storage
const storage = getStorage(app);

export { db, storage, app };