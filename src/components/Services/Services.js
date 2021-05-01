import React, {useContext } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from "react-bootstrap/AccordionContext";
import imageSeccionCuatro from "../../assets/img/section4-image.png";
import IconFeatherUp from "../../assets/img/Icon-feather-chevron-up.svg";
import { Accordion, Card } from "react-bootstrap";


const Services = () => {

    const accordionItems = [

        {
          title: 'Sed ut perspiciatis'
        },
        {
          title: 'Ut enim ad minima veniam'
        },
        {
            title: 'Sit amet, consectetur, adipisci'
        }
    ]

    function ContextAwareToggle({ children, eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
      
        const decoratedOnClick = useAccordionToggle(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        const isCurrentEventKey = currentEventKey === eventKey;
      
        return (
          <button className="button__arrow"
            type="button"
            style={{ transform: isCurrentEventKey ? 'rotate(0deg)': 'rotate(180deg)' }}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
      }
      


    return (
        <section id="services" className="section-services">
            
            <div className="imagen4">
                <img src={imageSeccionCuatro} alt="section4"/>
            </div>

            <Accordion className="accordion" defaultActiveKey="id-0">
                {
                    accordionItems.map(({title}, id) =>
                        <Card key={title}>
                            <Accordion.Toggle as={Card.Header} eventKey={`id-${id}`}>
                                <h4>{title}</h4>
                                <ContextAwareToggle eventKey={`id-${id}`}>
                                    <img src={IconFeatherUp} alt="IconFeatherUp"/>
                                </ContextAwareToggle>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`id-${id}`}>
                                <Card.Body> 
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br></br>eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br></br> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br></br> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                }
                
            </Accordion>
        </section>
    )
}


export default Services;