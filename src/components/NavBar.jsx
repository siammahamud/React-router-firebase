import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import { signOut } from "firebase/auth";
const NavBar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully..",{
        onClose:()=>navigate("/login")
      });
    } catch (error) {
      toast.error("An error occured during singOut", error);
    }
  };

  return (
    <nav className="bg-indigo-300 text-white">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              SIAM
            </a>
          </div>

          <div className="flex space-x-5">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 text-lg p-2"
                    : " text-lg p-2"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to={"/users"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 text-lg p-2"
                    : " text-lg p-2"
                }
              >
                USERS
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 text-lg p-2"
                    : " text-lg p-2"
                }
              >
                ABOUT
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 text-lg p-2"
                    : " text-lg p-2"
                }
              >
                CONTACT
              </NavLink>
            </div>

            {/* Sign Up Button */}
            {user ? (
              <div onClick={handleLogOut} className="hidden md:block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to={"/signup"}>
                <div className="hidden md:block">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Sign Up
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
