import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <NavLink className='link' activeclassname='active' to='/'>Homepage</NavLink>
                <NavLink className='link' activeclassname='active' to='/todos'>Todos</NavLink>
                <NavLink className='link' activeclassname='active' to='/posts'>Posts</NavLink>
                <NavLink className='link' activeclassname='active' to='/sadzcfjhkb'>Fake page</NavLink>
            </div>
        );
    }
}

export default Navbar;