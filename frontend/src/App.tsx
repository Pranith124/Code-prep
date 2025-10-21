
import { Landing } from './components/landing'
import './App.css'
import { Signin } from './components/signin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3v3HUCkz76iN777ibA7buvALF1t1TsEE",
  authDomain: "leetcode-clone-4ddc4.firebaseapp.com",
  projectId: "leetcode-clone-4ddc4",
  storageBucket: "leetcode-clone-4ddc4.firebasestorage.app",
  messagingSenderId: "894403564709",
  appId: "1:894403564709:web:77d869ba8397aa2308e94c",
  measurementId: "G-7919HQ947M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <Signin></Signin>

    </>
  )
}

export default App
