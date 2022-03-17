import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentTodo } from "../services/TodoService";

const TodoInfo = () => {

    const [todo, setTodo] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        getCurrentTodo(id).then(res => setTodo(res.data))
    },[])
    
    return (  
        <>
            <h2>{ todo.title }</h2>
            <p>Created by: { todo.userId }</p>
        </>
    );
}
 
export default TodoInfo;