import {useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth';

import { auth, 
         signInWithGooglePopup, 
         createUserDocumentFromAuth, 
         signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

//Method for useEffects and async data
/*         useEffect(() => {
            async function fetchData() {
              // You can await here
              const response = await MyAPI.getData(someId);
              // ...
            }
            fetchData();
          }, [someId]); // Or [] if effect doesn't need props or state */

const SignIn = () => {
    useEffect( () => async function () {
        const response = await getRedirectResult(auth);
        if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);

        }
    }, []);

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
       // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>This is the sign-in component</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>

            <SignUpForm />
        </div>
    )
}

export default SignIn;    
