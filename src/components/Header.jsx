import React, { Component } from 'react';
import Logo from './Logo'
import Navbar from './Navbar'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <header className='bg-dark' >
                    <nav className='container text-light flexbox p-1' >
                        <Logo />
                        <Navbar />
                    </nav>
                </header>
            </>
        );
    }
}
 
export default Header;