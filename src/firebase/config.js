import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaGJYmiG-HC9G3XrnoWqAVtGSpM1yPc3w",
  authDomain: "task-manager-973fc.firebaseapp.com",
  projectId: "task-manager-973fc",
  storageBucket: "task-manager-973fc.appspot.com",
  messagingSenderId: "635785588967",
  appId: "1:635785588967:web:bc4f85eab38a27c3f53242",
};

initializeApp(firebaseConfig);

const projectFirestore = getFirestore();
const timestamp = serverTimestamp();

export { projectFirestore, timestamp };
