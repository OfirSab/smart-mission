import React from 'react'

const Navbar = ({isLogin,loggedOut}) => {

        return (
            <nav className='navbar bg-primary'>
                <h2>
                    <i className="fas fa-users" />Users List Mission
                </h2>
            <ul>
                <li>
                    <a href='/Users'>Users List</a>
                </li>
                <li>
                    {isLogin ? <a href="/#" onClick={loggedOut}>Log out <i className="fas fa-sign-out-alt"></i></a> :
                     <a href='/Login' >Login</a>}
                </li>
            </ul>
            </nav>
        )
}

export default Navbar
