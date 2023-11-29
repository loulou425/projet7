import React from "react";
import Logo from "../images/Logo.footer.svg"
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className="Footer">
            <img src={Logo} alt="logo de l'agence kasa" />
            <p> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

