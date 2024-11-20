import { useLoaderData } from "react-router-dom";
import Usercard from "../components/Usercard";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <ul className="p-5 grid grid-cols-4 max-h-[100vh] min-h-fit gap-5 w-[100vw]  place-items-center">
        {users.map((user) => {
          return <Usercard key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default Users;
