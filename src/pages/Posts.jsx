import React, { Component } from 'react';
import { getAllPosts } from '../services/TodoService';
import Post from '../components/Post'
import PageTitle from '../components/PageTitle'

class Posts extends Component {
    state = {
        postsArr: []
    }

    async componentDidMount(){
        const { data } = await getAllPosts()
        this.setState({ postsArr: data })
    }

    render() {
        const { postsArr } = this.state
        return (
            <>
                <PageTitle title='posts' />
                {postsArr.map((item, index)=>{
                    return <Post item={item} key={index}/>
                })}
            </>
        );
    }
}
 
export default Posts;