import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjteu2ne5dRXMCWe4W4GDTzAA7JTWRXCo",
  authDomain: "venta-online-63270.firebaseapp.com",
  projectId: "venta-online-63270",
  storageBucket: "venta-online-63270.appspot.com",
  messagingSenderId: "618163444615",
  appId: "1:618163444615:web:c854d1ad74bddab3bfd122"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
//Guardar un usuario en la base de datos
const db = getFirestore();
export const createUserDocFromAuth = async (uId, name, email) => {
  const userDoc = doc(db, "user", uId)
  const getUserDoc = await getDoc(userDoc)
  if (!getUserDoc.exists()) {
    const create_at = new Date()
    try {
      await setDoc(userDoc, {
        name,
        email,
        create_at
      })
    } catch (err) {
      console.log(err)
    }
  }
}
export const createAuthUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  return response;
}
export const signInUser = async (email,password) => {
  const response = await signInWithEmailAndPassword (auth, email,password)
  console.log(response);
  return response;
}

export const signOutUser = async ()=>{
  await signOut (auth);
}
 
