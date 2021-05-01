import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'

const About = () =>{
    return (
        
            <Container fluid id="about">
                <Row className="Row1">
                    <Col className="Row1--col1"></Col>
                    <Col className="Row1--col2">
                        <h2>We Help Businesses <br></br> <span>Grow and Innovate</span></h2>
                    </Col>
                </Row>
                <Row className="Row2">
                    <Col className="Row2--col1"></Col>
                    <Col className="Row2--col2">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et  ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea  rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    </Col>
                </Row>
            </Container>

         
        
    )
}
export default About;