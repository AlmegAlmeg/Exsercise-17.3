import React, { Component } from 'react';

class BanTest extends Component {
    state = {
        isLoading: true,
        obj:{
            name: 'Ron',
            age: 808
        }
    }

    setSomething = boolean => {
        const { age, name } = this.state.obj
        if(boolean) return <p>Loading, please wait....</p>
        return <p>Your name is {name} and your age is {age}</p>
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);
    }

    render() {
        const { isLoading } = this.state
        return (
            <>
                {this.setSomething(isLoading)}
            </>
        );
    }
}
 
export default BanTest;