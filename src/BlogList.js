import { Link } from "react-router-dom";

const BlogList = ({ Blogs, title, handleClick }) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {Blogs.map((Blog) => (
            <div className="blog-preview" key={ Blog.id }>
                <Link to={`/blogs/${Blog.id}`}>
                    <h2>{ Blog.title }</h2>
                    <p>Written By { Blog.author }</p> 
                </Link>
                
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;