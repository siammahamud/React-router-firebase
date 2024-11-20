// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebase.config";
// import Loading from "../components/Loading";

const Home = () => {
  // const [user, loading] = useAuthState(auth);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <header>
        <div className="px-6 h-[80svh] text-center text-surface dark:bg-neutral-500 dark:text-white">
          <div className="flex flex-col justify-center items-center h-full">
            {/* {user ? (
              <h1 className="text-5xl font-semibold">
                Welcome to our website: {user.displayName}
              </h1>
            ) : (
              <h1 className="text-5xl font-semibold">
                Signup or login to view your profile
              </h1>
            )} */}
     <h1 className="text-4xl text-center text-red-400 font-bold"> wellcome to home page</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
