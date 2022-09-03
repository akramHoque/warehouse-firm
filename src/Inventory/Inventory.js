import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://young-sands-62072.herokuapp.com/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory])

    const decreaseQuantity = event => {

        event.preventDefault();

        const newQuantity = parseInt(inventory.quantity) - 1;
        const quantityFinal = { newQuantity };
        console.log(quantityFinal);

        fetch(`https://young-sands-62072.herokuapp.com/inventory/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantityFinal)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity updated !!!')
            })
    }

    //handle increase quantity

    const increaseQuantity = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        const quantity = parseInt(inventory.quantity);
        const newQuantity = number + quantity;
        const quantitySum = { newQuantity };

        fetch(`https://young-sands-62072.herokuapp.com/inventory/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantitySum)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity updated !!!')
            })

        event.target.reset();
    }

    return (


        <div className='my-5'>
            <div className='inventory mx-auto my-5'>
                <img className='w-100' src={inventory?.img} alt="" />
                <p className='id'>{inventory?._id}</p>
                <h4 className='text-secondary'>{inventory?.name}</h4>
                <h5 className='text-secondary'>{inventory?.supplierName}</h5>
                <p><small>{inventory?.shortDescription}</small></p>
                <p>Quantity: {inventory?.quantity}</p>
                <p className='text-danger'>Price: <span>${inventory?.price}</span></p>
                <p className='text-danger'>Stock: {inventory.quantity}</p>

            </div>
            <div className='text-center '>
                <button onClick={decreaseQuantity} className='btn btn-warning text-center mx-auto'>Delivered</button>
            </div>

            <div className='text-center pb-5'>
                <h6 className='text-secondary my-3'>Restock the Items</h6>
                <form className='my-3' onSubmit={increaseQuantity}>
                    <input type="number" name="number" id="" placeholder='please give a value' required />
                    <input className='btn btn-warning mx-2' type="submit" value="Restock" />
                    <Link to='/manageInventories' className=''>
                <button className='btn bg-warning'>Manage Inventories</button>
            </Link>
                </form>
                
            </div>
        
            



        </div>



    );
};

export default Inventory;