import Logo from "../images/LOGO.svg"
import NavHeader from './NavHeader'
import '../styles/Header.css'

function Header (){
    return(
    <div className="Header">
        <img className="logo" src={Logo} alt="logo de l'agence kasa" />
        <NavHeader className="NavHeader" />
    </div>


 );
        
}

export default Header