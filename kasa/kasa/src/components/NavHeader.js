import { Link } from "react-router-dom";
import '../styles/Header.css'

 function NavHeader() {
	return (
		<nav className="NavHeader">
			<Link to="/" className="NavHead">
				Acceuil
			</Link>
			<Link to="/about" className="NavHead">
				A Propos
			</Link>
		</nav>
	);
}

export default NavHeader