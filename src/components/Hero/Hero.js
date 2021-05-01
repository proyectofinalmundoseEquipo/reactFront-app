import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import imageSlide from "../../assets/img/slider-1@2x.png";

const Hero = () => {
  return (
    <section className='hero'>
     <Carousel controls={false}>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='First slide' />
          <Carousel.Caption>
            <h3>Sed ut perspiciatis <br></br> unde omnis iste natus</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error <br></br> sit voluptatem accusantium doloremque.</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='Second slide' />
          <Carousel.Caption>
            <h3>Sed ut perspiciatis <br></br> unde omnis iste natus</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error <br></br> sit voluptatem accusantium doloremque.</p>
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imageSlide} className='d-block w-100' alt='Third slide' />

          <Carousel.Caption>
            <h3>Sed ut perspiciatis <br></br> unde omnis iste natus</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error <br></br> sit voluptatem accusantium doloremque.</p>
            
            <Button variant='primary'>Read More</Button>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;