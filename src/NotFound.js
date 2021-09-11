import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <h2>Page not found.</h2>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;