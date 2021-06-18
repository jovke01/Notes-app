import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar">

            <Link to="/"><h2 className="logo">Notes app</h2></Link>
            <Link to="/create"><p>Create a note</p></Link>

        </nav >
    )
}

export default Navbar
