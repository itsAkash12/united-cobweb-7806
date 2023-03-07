import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC73aLGbsQixSWBn19EqFBfPXsBkEHKWbM",
  authDomain: "bestbuy-e2534.firebaseapp.com",
  projectId: "bestbuy-e2534",
  storageBucket: "bestbuy-e2534.appspot.com",
  messagingSenderId: "466729387659",
  appId: "1:466729387659:web:d40ddb5295d09ebe12768e",
  measurementId: "G-SCM1NT2YLN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
