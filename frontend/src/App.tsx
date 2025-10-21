
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css'
import { Signin } from './components/Signin';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDQaL49JvubDtZx55pRVsQWnpGtBIy9g3Q",
  authDomain: "fir-7292f.firebaseapp.com",
  projectId: "fir-7292f",
  storageBucket: "fir-7292f.firebasestorage.app",
  messagingSenderId: "111354716093",
  appId: "1:111354716093:web:220e72a8ce4d8a2b3cfcd4",
  measurementId: "G-NFTXKHTG58"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);


function App() {
  useEffect(()=>{
    onAuthStateChanged(auth,function(user){
      if (user){
        console.log("user signed in:",user);
      }
      else{
        console.log('There is no logged in user');
      }
    });
  },[])
  return (
    <>
    <Signin></Signin>
    </>
  )
}

export default App
