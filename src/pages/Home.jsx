// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";
// import Loading from "../components/Loading";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loader from "../components/Loader";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) {
    return <Loader />;
  }
  return (
    <header>
      <div className="px-6 py-5 h-[80svh] text-center bg-gray-300  dark:bg-neutral-500 dark:text-white">
        <div className="flex flex-col justify-center items-center h-full">
          {user ? (
            <div className="max-w-sm py-5 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image Section */}
              <div
                className="mx-auto size-44 bg-cover rounded-full bg-center"
                style={{ backgroundImage: `url(${user.photoURL})` }}
              ></div>

              {/* Card Body */}
              <div className="p-6">
                {/* Name Section */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {user.displayName}  
                </h2>

                {/* Email Section */}
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">Email:</span>{" "}
                  {user.email}
                </p>

                {/* User ID Section */}
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">User ID:</span>{" "}
                  {user.uid}
                </p>

                {/* Account Created Section */}
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">
                    Account Created:
                  </span>{" "}
                  {new Date(user.metadata.creationTime).toLocaleString()}
                </p>

                {/* Provider Section */}
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Provider:</span>{" "}
                  {user.providerId}
                </p>
              </div>
            </div>
          ) : (
            <h1 className="text-5xl font-semibold">
              Welcome to home page. Signup or login to view your profile.
            </h1>
          )}
        </div>
      </div>
    </header>
  );
};

export default Home;
