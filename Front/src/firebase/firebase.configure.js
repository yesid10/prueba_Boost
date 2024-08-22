
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbnPDptC7Vw4hwchyYP19j8kvaEuw2p14",
  authDomain: "boost-1be07.firebaseapp.com",
  projectId: "boost-1be07",
  storageBucket: "boost-1be07.appspot.com",
  messagingSenderId: "965801354593",
  appId: "1:965801354593:web:a763a118073a27a78a9120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);