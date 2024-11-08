import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
};

export default Navbar;
