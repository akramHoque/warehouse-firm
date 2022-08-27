import React from 'react';
import {Carousel} from 'react-bootstrap' ;
import banner1 from '../../images/Banner/banner1.webp';
import banner2 from '../../images/Banner/banner2.jpg';

const Banner = () => {
    return (
        <div className='my-5'>
              <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={banner1}
                        alt="First slide"
                 />
              <Carousel.Caption>
                        <h3>Our fresh produce is sourced every morning, you get the best from us.</h3>
                        <p>All the fruits at an affordable price, And the best of quality. Tomatto, guava, papaya, oranges</p>
              </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={banner2}
                        alt="Second slide"
                    />
                <Carousel.Caption>
                        <h3>At Your Doorstep anywhere in anytime.</h3>
                        <p ><span className='text-danger'> Free Home </span>delivery.</p>
                        <p>On orders of <span className='text-danger'>$200/-</span> and avobe.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;