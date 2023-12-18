import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, 
        createUserDocumentFromAuth, 
        signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    //const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
           // console.log(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    alert('Wrong email or password');
                    break;
                case 'auth/invalid-login-credentials':
                    alert('Wrong email or password');
                    break;
                default: 
                    console.log(error.code);
            } 
        /* if (error.code === "auth/invalid-login-credentials"){
                alert('Incorrect email or password');
                console.log(error.code);
            } */
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }


    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label ="Email" onChange={handleChange} required type="email" name="email" value ={email} />
                <FormInput label ="Password" onChange={handleChange} required type="password" name="password" value = {password}/>
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;