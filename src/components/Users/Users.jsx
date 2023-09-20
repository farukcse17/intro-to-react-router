import { useLoaderData } from "react-router-dom";

const Users = () =>{
    const users = useLoaderData();
    return(
        <div>
            <h3>Number of Users: {users.length} </h3>
        </div>
    )
}
export default Users;