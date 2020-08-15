import React from 'react'
import "./Header.css"

const Header = ({ username }) => {
    return (
        <header>
            <h1>Messenger</h1>
            <p className="p">World Chat</p>
            <h2 className="h2">Welcome, <span>{username}</span></h2>
            <hr />
        </header>
    )
}

export default Header;
