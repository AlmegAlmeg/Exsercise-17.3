import { Link } from "react-router-dom";

const Post = ({ item: {title, id} }) => {
  return (
      <div className="card m-3">
        <div className="card-body flexbox">
          <h5 className="card-title">{ title }</h5>
          <button className="btn btn-info">
            <Link className='text-decoration-none text-dark' to={`/post/${id}`}>Read More</Link>
          </button>
        </div>
      </div>
  );
}
 
export default Post;