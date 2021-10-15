import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Banner/1.jpg'
import img2 from '../../../images/Banner/2.jpg'
import img3 from '../../../images/Banner/3.jpg'
import img4 from '../../../images/Banner/4.jpg'
const Banner = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img2}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img3}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img4}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Four slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;