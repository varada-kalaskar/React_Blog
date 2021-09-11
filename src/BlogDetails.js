import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: Blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + Blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading..</div> }
            { error && <div>{ error }</div> }
            { Blog && (
                <article>
                    <h2>{ Blog.title }</h2>
                    <p>Written by { Blog.author }</p>
                    <div>{ Blog.body }</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;