import { NavLink, useNavigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { TEInput, TERipple } from "tw-elements-react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { signupWithEmailandPassword } from "../firebase/firebase";
import SocialLogin from "../components/SocialLogin";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === cPassword) {
        await signupWithEmailandPassword(name, email, password, image);
        toast.success(
          "Signed Up successfully, please verify your email before login",
          { onclose: () => navigate("/login") }
        );
      } else {
        setError("Password doesn't match, please check your password...");
      }
    } catch (error) {
      toast.error(`An error occured during signUp ${error.message}`);
    }
  };

  return (
    <div>
      <section className="mt-2">
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
        <div className="flex justify-end px-10">
          <div>
            <NavLink
              to={"/"}
              type="button"
              className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none"
            >
              Back to Home
            </NavLink>
          </div>
        </div>
        <h1 className="text-center text-3xl underline underline-offset-8 font-semibold">
          Sign Up
        </h1>
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                {/* <!-- Name input --> */}
                <TEInput
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  label="Name"
                  size="md"
                  className="mb-6"
                  required
                ></TEInput>

                {/* <!-- Email input --> */}
                <TEInput
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  label="Email address"
                  size="md"
                  className="mb-6"
                  required
                ></TEInput>
                {/* password input field  */}
                <div className="relative mb-6">
                  <TEInput
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    size="md"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  ></TEInput>
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <VscEye size={20} />
                    ) : (
                      <VscEyeClosed size={20} />
                    )}
                  </div>
                </div>
                {/* <!--Confirm-Password input--> */}
                <div className="relative mb-6">
                  <TEInput
                    onChange={(e) => setcPassword(e.target.value)}
                    value={cPassword}
                    type={showPassword ? "text" : "password"}
                    label="Confirm Password"
                    size="md"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                    required
                  ></TEInput>
                  {/* image input  */}
                  <div className="mt-2">
                    <label
                      className="px-2 text-sm font-thin text-gray-500"
                      htmlFor="image"
                    >
                      Profile Picture
                    </label>
                    <TEInput
                      onChange={(e) => setImage(e.target.files[0])}
                      name="image"
                      type="file"
                      size="sm"
                      className=" w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                      required
                    ></TEInput>
                  </div>
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <VscEye size={20} />
                    ) : (
                      <VscEyeClosed size={20} />
                    )}
                  </div>
                  {/* error message  */}
                  <p className="text-red-400">{error}</p>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <p className="mb-0 mt-2 pt-1">
                    Already have an account?{" "}
                    <NavLink
                      to={"/login"}
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 font-semibold"
                    >
                      Login
                    </NavLink>
                  </p>
                </div>

                {/* <!-- Submit button --> */}

                <TERipple rippleColor="light" className="w-full">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Sign up
                  </button>
                </TERipple>

                {/* <!-- Divider --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold text-gray-700">
                    OR
                  </p>
                </div>
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
