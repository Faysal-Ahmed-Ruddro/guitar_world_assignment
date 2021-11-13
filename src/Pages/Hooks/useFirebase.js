import { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
initializeFirebase();
const useFirbase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register newUser
  const registerNewUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // saveUser to database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
        });
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  // signInWith EmailPass
  const signInWithEmailPass = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //  google signIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // onAuth State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);


  // save user to database
  const saveUser = (email,displayName,method)=>{
    const user = { email, displayName };
      fetch("http://localhost:5000/users", {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
  }

  // admin 
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  // signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        setError({});
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    admin,
    isLoading,
    signInWithGoogle,
    registerNewUser,
    signInWithEmailPass,
    logOut,
  };
};
export default useFirbase;
