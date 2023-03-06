import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Xm8TSg5Rc08kKzZhwMIiU1-aycyk510",
  authDomain: "onecontact-a80c2.firebaseapp.com",
  projectId: "onecontact-a80c2",
  storageBucket: "onecontact-a80c2.appspot.com",
  messagingSenderId: "569252823065",
  appId: "1:569252823065:web:8e1c1244d9328140f7ea88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};

export default app;


