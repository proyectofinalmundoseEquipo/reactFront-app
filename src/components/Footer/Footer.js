import React from 'react';
import footerLogo from "../../assets/img/footer-logo.svg";

const Footer = ()=>{
    return(
    <footer >
        <div className="pie">
            <p>2020 © All rights reserved.</p>
            <img src={footerLogo} alt="logo 25Watts"/>
        </div>
    </footer>
    )
}

export default Footer;