import React from 'react';
import notFound from '../images/NotFound/notfound.webp';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger my-3'>Page Not Found.</h2>
            <h4 className='text-center text-danger'>404</h4>
           <img  className="mx-auto" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;