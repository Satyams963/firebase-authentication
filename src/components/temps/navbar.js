import { Link } from 'react-router-dom';
const Navbar  = () => {
    return (
            <nav className="navbar  mr-auto navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="nav-link" to="/blog/create">Create Blog </Link>
                    <Link className="nav-link" to="/login">Login </Link>
            </nav>            
    )
}

export default Navbar