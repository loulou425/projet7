import '../styles/Banner.css'
import Logo from "../images/Image1.svg"

function Banner() {
    return (
    <div className='titre'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img className="img1" src={Logo} alt="Montagne" />
    </div>)
}

export default Banner