import axios from "axios"

const URL = 'https://jsonplaceholder.typicode.com'

export const getAllTodos = () => axios.get(`${URL}/todos`)

export const getCurrentTodo = (id) => axios.get(`${URL}/todos/${id}`)

export const getAllPosts = () => axios.get(`${URL}/posts`)

export const getCurrentPost = (id) => axios.get(`${URL}/posts/${id}`)

// export const getAllTodos = async () => {
//     await axios.get(`${URL}`)
// }
