
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA2J-kAcRclCcPP1_2oEcg6bALjC6vtuOU",
//   authDomain: "fir-storage-84af9.firebaseapp.com",
//   databaseURL: "https://fir-storage-84af9-default-rtdb.firebaseio.com",
//   projectId: "fir-storage-84af9",
//   storageBucket: "fir-storage-84af9.appspot.com",
//   messagingSenderId: "331065603820",
//   appId: "1:331065603820:web:840eced0668fffe09117c9"
// };

// // // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
//  export const db = getFirestore(app);






 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { GoogleAuthProvider } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";



 const firebaseConfig = {
  apiKey: "AIzaSyAUlBdl9xB3gLcyYNo3ADOvKxIgHIes-Co",
  authDomain: "new-auth-6dec3.firebaseapp.com",
  projectId: "new-auth-6dec3",
  storageBucket: "new-auth-6dec3.firebasestorage.app",
  messagingSenderId: "604416030302",
  appId: "1:604416030302:web:c14035257f8e598f75e6cf",
  measurementId: "G-K3DS2PRB5J"
};








 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);

