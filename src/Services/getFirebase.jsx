import firebase from 'firebase';
import 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCmxDOpHQmrfEqLdwAYzHOJ68GRdKvxs9s",
    authDomain: "trekking-buenos-aires.firebaseapp.com",
    projectId: "trekking-buenos-aires",
    storageBucket: "trekking-buenos-aires.appspot.com",
    messagingSenderId: "1076078040168",
    appId: "1:1076078040168:web:9209dcbd54e71f474e97dd",
    measurementId: "G-MG2G98MHC8"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}