import React, { Component } from 'react';

class UserCard extends Component {
    state = {
        user: {
            name: 'John',
            isAdmin: true
        }
    } 
    render() {
        const { isAdmin, name } = this.state.user
        return (
            <>
                {isAdmin && <button className='btn btn-info'>Edit</button>}
            </>
        );
    }
}
 
export default UserCard;