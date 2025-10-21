import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
  url: 'http://localhost:3000',
  // This must be true.
  handleCodeInApp: true,
};

export const Signin = ()=>{
    const auth=getAuth();
    const [email, setEmail] = useState("");



    async function Onsignin(){
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                alert("Email sent");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }
    
    return <div>
        <input type="text" placeholder="Email" onChange={(e) =>{
            setEmail(e.target.value);
        }}></input>
        <button onClick={Onsignin}>Sign Up</button>
    </div>
}