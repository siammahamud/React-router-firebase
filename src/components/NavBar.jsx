import {  NavLink } from "react-router-dom";

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
            <div className="hidden md:block mt-3">
              <a
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/users"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Users
          </a>
          <a
            href="/about"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <a
            href="/signup"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
