import React from "react";
import Logo from "../images/Logo.footer.svg"
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <img src={Logo} alt="logo de l'agence kasa" />
            <p> © 2023 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;