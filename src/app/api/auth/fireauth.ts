// import Firebase from "firebase/app";
// import "Firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCR5vyStVC3wO2oUiM9ExIG_5ku1EAXI8Y",
  authDomain: "solardb-1e507.firebaseapp.com",
  databaseURL:
    "https://solardb-1e507-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "solardb-1e507",
  storageBucket: "solardb-1e507.appspot.com",
  messagingSenderId: "313817863144",
  appId: "1:313817863144:web:f7e81444f8753db78f4a5d",
};

const app = initializeApp(firebaseConfig);
export default function initFirebase() {
  return app;
}

// const FirebaseCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// };
// // if a Firebase instance doesn't exist, create one
// if (!Firebase.apps.length) {
//   Firebase.initializeApp(FirebaseCredentials);
// }
//
// export default Firebase;
