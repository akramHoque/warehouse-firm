import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory])

    const decreaseQuantity = event => {

        event.preventDefault();

        const newQuantity = parseInt(inventory.quantity) - 1;
        const quantityFinal = { newQuantity };
        console.log(quantityFinal);

        fetch(`http://localhost:5000/inventory/${itemId}`, {
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

        fetch(`http://localhost:5000/inventory/${itemId}`, {
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


        <div>
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

            <div className='text-center mb-3'>
                <button onClick={decreaseQuantity} className='btn btn-warning text-center mx-auto'>Delivered</button>
            </div>

            <div className='text-center'>
                <h4 className='text-secondary py-3'>Restock the Items</h4>

                <form onSubmit={increaseQuantity}>
                    <input type="number" name="number" id="" placeholder='please give a value' required />
                    <input className='btn btn-warning mx-2' type="submit" value="Restock" />

                </form>
            </div>

            <Link to='/manageInventories' className='m-5 pb-5'>
                <button className='btn bg-secondary text-warning'>Manage Inventories</button>
            </Link>



        </div>



    );
};

export default Inventory;