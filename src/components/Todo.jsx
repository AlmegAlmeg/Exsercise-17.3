import { Link } from "react-router-dom";

const Todo = ({ item: { title, id } }) => {
    return (
        <div className="card m-2">
          <div className="card-body">{ title }</div>
          <button className="btn btn-warning">
            <Link to={`/todo/${id}`}>Read more</Link>
          </button>
        </div>
    );
}
 
export default Todo;