import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Usercard = ({ user }) => {
  return (
    <>
      <li className="p-3 shadow-md w-fit  max-w-[20rem] bg-gray-200 rounded-md">
        <p>
          <strong>Username:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <Link to={`/users/${user.id}`}>
          <button className="bg-teal-400 px-2 py-1 shadow-sm rounded-lg mt-2 ">
            User Details
          </button>
        </Link>
      </li>
    </>
  );
};

export default Usercard;
