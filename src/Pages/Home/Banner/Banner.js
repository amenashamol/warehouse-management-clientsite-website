
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/computer1.jpg'
import banner2 from '../../../images/computer2.jpg'


const Banner = () => {
    return (
        <div>
          <div className='slide-title'>
          <h2 >Learn New Skills in IT Field </h2> 
          <h3 > <span> And Build Your Bright Career</span> </h3>
          </div>
          
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100" style={{height:"450px"}}
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 "  style={{height:"450px"}}
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </div>
    );
};

export default Banner;