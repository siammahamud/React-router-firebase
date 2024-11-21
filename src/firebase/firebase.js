import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "./firebase.config.js";
import { sendEmailVerification, signOut, updateProfile } from "firebase/auth";

const signupWithEmailandPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await updateProfile(user,{displayName:name});
    await sendEmailVerification(user)
    await signOut(auth);
  } catch (error) {
    console.error("User Registration failed an unknown error occured", error.message)

  }
};

export default signupWithEmailandPassword;