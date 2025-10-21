import {   signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const actionCodeSettings = {
  url: 'http://localhost:5173',
  // This must be true.
  handleCodeInApp: true,
};

export const Signin = ()=>{
    const [email, setEmail] = useState("");



    async function Onsignin(){
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) {
                    return;
                }
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    
    return <div>
        <img src="
https://www.gstatic.com/images/branding/googleg_gradient/1x/googleg_gradient_standard_20dp.png" alt="google logo" />
        <button onClick={Onsignin}>Login with google</button>
    </div>
}