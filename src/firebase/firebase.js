/* eslint-disable no-useless-catch */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase.config.js";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
const googleAuthProvider = new GoogleAuthProvider();

const signupWithEmailandPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await updateProfile(user, { displayName: name });
    await sendEmailVerification(user);
    await signOut(auth);
  } catch (error) {
    console.error(
      "User Registration failed an unknown error occured",
      error.message
    );
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    throw error;
  }
};

// function for login with Google
const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    toast.success("Successfully Loged In With Google");
  } catch (error) {
    toast.error("An error occured during google login", error);
  }
};



const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

export {
  signupWithEmailandPassword,
  loginWithEmailAndPassword,
  resetPassword,
  loginWithGoogle,
};
