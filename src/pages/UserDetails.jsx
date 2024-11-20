import { useLoaderData } from "react-router-dom"


const UserDetails = () => {
    const {name, email, phone, address:{city}} = useLoaderData()
  return (
    <div className="text-3xl bg-red-200 mx-auto my-20 w-fit p-5 border-2 border-gray-500">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{city}</p>
    </div>
  )
}

export default UserDetails