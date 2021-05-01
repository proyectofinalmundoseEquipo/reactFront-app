import React from 'react';
import Logo from '../../assets/img/top-logo.svg';
import Nav from 'react-bootstrap/Nav';


const Header = () =>{
    return (
       <header className="header">
         <div className="container">
            <a href="www.google.com">
                <img src={Logo} alt="Landing Page"/>
            </a>
            <Nav className='navbar'>
            
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#services">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#contact" color="white">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
                   
         </div>
       </header>
    )
}

export default Header;