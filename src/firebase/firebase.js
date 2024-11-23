/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config.js";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const signupWithEmailandPassword = async (name, email, password, image) => {
  const uploadImage = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `user-images/${image.name}`); // স্টোরেজ পাথে ইমেজ সংরক্ষণ
    await uploadBytes(storageRef, image); // ইমেজ আপলোড
    return getDownloadURL(storageRef); // ইমেজ URL রিটার্ন
  };
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let photoURL = image ? await uploadImage(image) : null;
    await updateProfile(user, { displayName: name, photoURL });
    const user = response.user;

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

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

export { signupWithEmailandPassword, loginWithEmailAndPassword, resetPassword };
