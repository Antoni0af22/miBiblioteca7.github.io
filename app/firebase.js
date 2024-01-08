import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAVTU_bU7G0v6ifR5XhYJ0BTZGmG3Qe91w",
  authDomain: "mibiblioteca7-7d370.firebaseapp.com",
  projectId: "mibiblioteca7-7d370",
  storageBucket: "mibiblioteca7-7d370.appspot.com",
  messagingSenderId: "821470375412",
  appId: "1:821470375412:web:19e87fad20ec6a35735da1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });
