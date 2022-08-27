import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from '../images/Faqs/ask.jpg';
const Faqs = () => {
    return (
        <div className='container my-5'>
        <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 col-md-6 align-items-center justify-content-center ">
        <img className='w-100 rounded'   src={img} alt="" />
        </div>
        <div className="gym-content col-sm-12 col-lg-6 col-md-6 align-items-center justify-content-center px-3">
        <div >
           <h2 className = 'text-center text-danger'>Questions</h2>
           </div>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header><span className='text-secondary'>What Type of Produce do You expects?</span></Accordion.Header>
    <Accordion.Body>
     We are working with a vast produce. We have producer who can produce more and more fruits like fresh banana, apple, guava, watermelon, anaros, orange, lichu, malta, strawberry, blackberry etc. we want your feedback to get idea of customers which is help to business.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><span className='text-secondary'>How Long is the season?</span></Accordion.Header>
    <Accordion.Body>
      Every fruit products depend on a seasonal environment. The season is 20 weeks long for the Downtown Windsor Farmer’s Market, running May 28th to October 8th, Sat from 8am-1pm to serve continue
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header > <span className='text-secondary'>How is Our items?</span> </Accordion.Header>
    <Accordion.Body>
     We trust service very fast. Our fruit quantity and qualility is so good thats why we are very happy to business. Hopefully the items likes by all people. your feedback can give us. Our warhouse is includes more and more oragnic for you.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
        </div>
        
        
    
    );
};

export default Faqs;