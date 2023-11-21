import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";



const SignIn = () =>{
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
        </div>
    )
}

export default SignIn;