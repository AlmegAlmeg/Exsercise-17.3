import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Todo from '../components/Todo';
import { getAllTodos } from '../services/TodoService';

class Todos extends Component {
    state = {
        todosArr: []
    }

    // componentDidMount(){
    //     getAllTodos()
    //         .then(res => this.setState({ todosArr: res.data }))
    // }

    async componentDidMount(){
        const { data } = await getAllTodos()
        this.setState({ todosArr: data })
    }

    render() {
        const { todosArr } = this.state
        return (
            <>
                <PageTitle title='todos' />
                {todosArr.map((item, index)=>{
                    return <Todo item={item} key={index} />
                })}
            </>
        );
    }
}
 
export default Todos;