import './User.css';
const User = ({user}) => {
const {id, name, email, phone} = user;
const cardStyle = {
    width: '300px',
    border: '2px solid green',
    borderRadius: '12px',
    backgroundColor:'lightGray'
}
    return(
        
        <div>
            
                <div className="card" style={cardStyle}>
                    <p>Name: {name}</p>
                    <p>email: {email}</p>
                    <p>phone: {phone}</p>
                    <div>
                        <button>User Details</button>
                    </div>
                </div>
            
        </div>
    )
}
export default User;