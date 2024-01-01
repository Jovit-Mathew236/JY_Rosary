import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
console.log(import.meta.env.VITE_APP_FIREBASE_API_KEY);
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy_LtoW3qRPwBPz2lBsg3r7QOfUOun7Mk",
  authDomain: "jy-rosary.firebaseapp.com",
  projectId: "jy-rosary",
  storageBucket: "jy-rosary.appspot.com",
  messagingSenderId: "319729266829",
  appId: "1:319729266829:web:68445b03c7d61dae2a32c4",
  measurementId: "G-5V672M9T9V"
};
export default firebase.initializeApp(firebaseConfig);
