import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () =>{
    const users = useLoaderData();
    return(
        <div>
            <h3>Number of Users: {users.length} </h3>
            <div className="card-container">
               {
                users.map(user =><User key={users.id} user={user}></User>)
               }
            </div>
        </div>
    )
}
export default Users;