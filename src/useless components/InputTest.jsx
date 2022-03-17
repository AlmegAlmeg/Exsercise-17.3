import React, { Component } from 'react';

class InputTest extends Component {
    state = {
        para: ''
    }

    setPara = (e) => {
        const value = e.target.value
        this.setState({ para: value })
    }

    render() {
        const { para } = this.state
        return (
            <>
                <input onChange={(e) => this.setPara(e)} type="text" placeholder='Tell me something'/>
                <br />
                {para}
            </>
        );
    }
}
 
export default InputTest;