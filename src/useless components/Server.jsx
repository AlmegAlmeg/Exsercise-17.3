import React, { Component } from 'react';

class Server extends Component {
    state = {
        isServerOnline: false
    } 

    changeStatus = status => {
        return this.setState({ isServerOnline: status })
    }

    render() {
        const { isServerOnline } = this.state
        return (
            <>
                {isServerOnline ? 
                    <button className='btn btn-danger' onClick={()=> this.changeStatus(false)}>Turn off</button> :
                    <button className='btn btn-success' onClick={()=> this.changeStatus(true)}>Turn on</button>
                }
            </>
        );
    }
}
 
export default Server;