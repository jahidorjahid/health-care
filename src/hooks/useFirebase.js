import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [registeredUserName, setregisteredUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleNameChange = (e) => {
    setregisteredUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setpass(e.target.value);
  };

  const loginWithEmail = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      setError("Password should contain 2 upper case");
      return;
    }

    registerUsingEmail(email, pass)
      .then((result) => {
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerUsingEmail = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: registeredUserName }).then(
      () => {}
    );
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    loginWithGoogle,
    loginWithEmail,
    handleNameChange,
    handleEmailChange,
    handlePassChange,
    handleRegister,
    error,
    setError,
    logOut,
    user,
  };
};

export default useFirebase;
