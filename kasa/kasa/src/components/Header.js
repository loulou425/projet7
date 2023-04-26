import Logo from "../images/LOGO.svg"
import NavHeader from './NavHeader'

function Header (){
    return(
    <header className="headerWrap">
        <img className="logo" src={Logo} alt="logo de l'agence kasa" />
        <NavHeader className="NavHeader" />
    </header>


 );
        
}

export default Header