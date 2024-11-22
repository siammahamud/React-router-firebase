// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";
// import Loading from "../components/Loading";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loader from "../components/Loader";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header>
        <div className="px-6 h-[80svh] text-center text-surface dark:bg-neutral-500 dark:text-white">
          <div className="flex flex-col justify-center items-center h-full">
            {user ? (
              <h1 className="text-5xl font-semibold">
                Welcome to our website:
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <p>{user.metadata.creationTime}</p>
              </h1>
            ) : (
              <h1 className="text-5xl font-semibold">
                wellcome to home page Signup or login to view your profile
              </h1>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
