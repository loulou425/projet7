import { Link } from "react-router-dom";

 function NavHeader() {
	return (
		<nav className="nav-header">
			<Link to="/" className="NavHeaderHome">
				Accueil
			</Link>
			<Link to="/about" className="NavHeaderAbout">
				A Propos
			</Link>
		</nav>
	);
}

export default NavHeader