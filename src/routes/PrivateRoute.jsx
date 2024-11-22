/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  } else if (!user) {
    return <Navigate to={"/signup"} />;
  } else {
    return children;
  }
};

export default PrivateRoute;
