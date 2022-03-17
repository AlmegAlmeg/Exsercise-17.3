import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentPost } from '../services/TodoService'

const PostInfo = () => {

    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        getCurrentPost(id).then(res => setPost(res.data))
    }, [])

    return (
        <>
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
        </>
    )
}
 
export default PostInfo