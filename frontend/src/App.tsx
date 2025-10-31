
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css'
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import { Topbar } from './components/topbar';
import { PosterBar } from './components/poster_bar';

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
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
}

function StoreApp(){
  const [user,setUser] = useRecoilState(userAtom);

  useEffect(()=>{
    onAuthStateChanged(auth,function(user){
      if (user && user.email){
        setUser({
          loading:false,
          user:{
            email:user.email,
          }
        });
      }
      else{
        setUser({
          loading:true,
        });

      }
    });
  },[]);

  if (user.loading){
    return <div>loading...</div>
  };
  if(!user){
    return <h1>Signin</h1>
  };

  return (
<div >
    <Topbar />
    <PosterBar/>
    <h1>Welcome {user.user?.email}</h1>
  </div>)
};


export default App
