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
  apiKey: "AIzaSyDOpR-Ept16bX781KnmfIP2v9MA1PnvyGo",
  authDomain: "proyecto-ahm.firebaseapp.com",
  projectId: "proyecto-ahm",
  storageBucket: "proyecto-ahm.appspot.com",
  messagingSenderId: "620283301335",
  appId: "1:620283301335:web:e92096c088ae08c71c0f92",
  measurementId: "G-B60DT98CT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
