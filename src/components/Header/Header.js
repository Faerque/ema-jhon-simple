import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alte=""/>
            <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory </Link>
            <button onClick={() => setLoggedInUser({})}  className="btn btn-danger" > S I G N O U T </button>
            </nav>
        </div>
    );
};

export default Header;