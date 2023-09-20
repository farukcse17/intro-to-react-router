import { Link } from 'react-router-dom';
import './Header.css';
const Header = () =>{
    return(
        <div>
            <h1>Navbar</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                {/* <a href="/contact">Contact Us</a> */}
            </nav>
        </div>
    )
}
export default Header;
