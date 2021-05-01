import React, { useState } from 'react';
import ContactImage from "../../assets/img/contact-image.png";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { sendEmail } from "../../axios"
const Contact = () => {
  const [validated] = useState(false)
  const [formData, setFormData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert('Se envio')
    const form = e.currentTarget;
    console.log(form.checkValidity())
    // checkValidity() es un metodo que me devuelve true o falsen

    if (form.checkValidity()) {
      console.log(formData)
      console.log('El form fue validado')
      let responseData = await sendEmail(formData)
      console.log(responseData.data)
      alert('El mensaje ha sido enviado');
      form.reset()
    } else {
      alert('Debes completar correctamente el formulario');
    }
  }

  const handleOnChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    // Vamos a crear nuestro objeto formData
    // {
    //   name: 'Franco'
    //   email: "franco@gmail.com"
    //   phone: 346787666656
    //   message: 'sadasdasdasd asd asd '
    // }
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(formData)

  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <h3>
              Get in touch<br></br>
              <span>We are hiring!</span>
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control className= "control"
                  onChange={handleOnChange}
                  required
                  type='text'
                  placeholder='Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group >
                <Form.Control className= "control"
                  onChange={handleOnChange}
                  required
                  name='email'
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>

              <Form.Group >
                <Form.Control className= "control"
                  onChange={handleOnChange}
                  required
                  name='phone'
                  type='tel'
                  placeholder='Phone'
                />
              </Form.Group>

              <Form.Group controlId='formBasicTextArea'>
                <Form.Control className= "control"
                  onChange={handleOnChange}
                  required
                  name='message'
                  as='textarea'
                  rows={3}
                  placeholder='Message'
                />
                <Form.Control.Feedback type='invalid'>
                  Por favor ingrese un mensaje
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant='primary' type='submit'>
                Send
              </Button>
            </Form>
            < br />
          </Col>
          <Col md={12} lg={7}>
            <img src={ContactImage} alt='Contact' className='d-block w-100' />
          </Col>
        </Row>
      </Container>
     
    </section>
  );
}

export default Contact;