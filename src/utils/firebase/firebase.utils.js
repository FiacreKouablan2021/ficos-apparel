import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdmyVM9QJeBGt4yCUx_k5hZ3l_ws9UZes",
    authDomain: "ficos-apparel.firebaseapp.com",
    projectId: "ficos-apparel",
    storageBucket: "ficos-apparel.appspot.com",
    messagingSenderId: "383213675637",
    appId: "1:383213675637:web:e443f0a9081e904d79043c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const  userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

      try {
        await setDoc(userDocRef,{displayName, email, createdAt});
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
}