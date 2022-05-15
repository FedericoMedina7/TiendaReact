import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4GTY072zAnhJwpwShHhgq99WwQUm6U98",
  authDomain: "kstorecoder.firebaseapp.com",
  projectId: "kstorecoder",
  storageBucket: "kstorecoder.appspot.com",
  messagingSenderId: "543397273718",
  appId: "1:543397273718:web:142609d7cf11700d027f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}