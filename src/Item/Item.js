import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Item.css' ;

const Item = ({item}) => {
    const { _id , name, img, shortDescription, price, supplier, quantity} = item ;
    const navigate = useNavigate();
    const handleUpdateBtn = id =>{
        navigate(`/inventory/${id}`)  
    }
    return (
        <div>
        
            <div className='item'>
            <img className='w-50' src={img} alt="" />
            <h5 className='text-secondary'>{name}</h5>
            <h6 className='text-secondary'>{supplier}</h6>
             <p>Quantity: {quantity}</p>
            <p className='text-danger'>Price: <span>${price}</span></p>
            <p className='text-muted'><small>{shortDescription}</small></p> 
                <div>
                  <button onClick={() => handleUpdateBtn(_id)} className='btn btn-warning w-50 item-btn font-semibold update-button'>Update</button>
                </div> 
        </div>
        </div>
    );
};

export default Item;