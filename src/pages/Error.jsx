import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

class Error extends Component {
    state = {  } 
    render() { 
        return (
            <>
                {/* REMINDER TO DO SOMTHING HERE */}
                <PageTitle />
                <p>Oops, somehitng went wrong</p>
                <button className='btn btn-primary'><Link className='text-light' to='/'>Back To Homepage</Link></button>
            </>
        );
    }
}
 
export default Error;