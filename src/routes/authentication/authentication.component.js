import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

//Method for useEffects and async data
/*         useEffect(() => {
            async function fetchData() {
              // You can await here
            const response = await MyAPI.getData(someId);
              // ...
            }
            fetchData();
          }, [someId]); // Or [] if effect doesn't need props or state */

const Authentication = () => {
    return(
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    ) 
} 

export default Authentication;    
