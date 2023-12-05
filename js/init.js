/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA69iFjcZ_n-ARm0WeRrzYbELW_Bq9aHhc",
  authDomain: "aut50ahm.firebaseapp.com",
  projectId: "aut50ahm",
  storageBucket: "aut50ahm.appspot.com",
  messagingSenderId: "579674238051",
  appId: "1:579674238051:web:1282a2c8488d4aa3e6dc56",
  measurementId: "G-P3DGG59F6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
