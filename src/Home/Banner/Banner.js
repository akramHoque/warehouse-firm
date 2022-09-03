import React from 'react';
import {Carousel} from 'react-bootstrap' ;
import banner1 from '../../images/Banner/32.png';
import banner2 from '../../images/Banner/34.png';

const Banner = () => {
    return (
        <div className='my-2'>
              <div className='container'>
            <Carousel>
           
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-100"
                        src={banner1}
                        alt="First slide"
                 />
                 
              <Carousel.Caption className = "">
             
                
                <h1 >Organic Fruits Warehouse</h1>
      <h3 className=' text-center'><span className=''>Fresh and tasty</span></h3>
                
              
              </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100 "
                        src={banner2}
                        alt="Second slide"
                    />
                <Carousel.Caption>
                <h1 >Organic Fruits Warehouse</h1>
      <h3 className=''><span className=''>Fresh and tasty</span></h3>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;