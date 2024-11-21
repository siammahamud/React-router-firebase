import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-indigo-300 text-white">
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
            <Link to={"/signup"}>
              <div className="hidden md:block mt-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Sign Up
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
