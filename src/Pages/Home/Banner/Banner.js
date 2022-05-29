
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/bbb1.jpg'
import banner2 from '../../../images/bbb2.jpg'
import banner3 from '../../../images/bb3.jpg'


const Banner = () => {
    return (
        <div>
          <div className='slide-title'>
          <h2 >The new fresh fruit, vegetable and greens warehouse   </h2> 
          <h3 > <span> of Coto in Bangladesh</span> </h3>
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
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 "  style={{height:"450px"}}
      src={banner3}
      alt="Third slide"
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