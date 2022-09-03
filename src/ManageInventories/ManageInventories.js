import React, { useEffect, useState } from 'react';
import '../Items/Items.css';
import '../Item/Item.css';
import { Link } from 'react-router-dom';


const ManageInventories = () => {

  const [inventories, setInventories] = useState([]);


  const handleDeleteItem = id => {
    const proceed = window.confirm('Are you sure to Delete?')
    if (proceed) {
      const url = `https://young-sands-62072.herokuapp.com/manageInventories/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = inventories.filter(item => item._id !== id);
          setInventories(remaining);
        })

    }
  }



  useEffect(() => {
    fetch('https://young-sands-62072.herokuapp.com/manageInventories')
      .then(res => res.json())
      .then(data => setInventories(data))
  }, [])


  return (
    <div className='container pb-5'>
      <div className="row">
        <h1 className=' text-center mb-3'> <span className='text-danger p-2 '>Items</span></h1>
        <div className="items-container mb-5 ">
          {
            inventories.map(item =>
              <div className='item' key={item?._id}>
                <img className='w-50' src={item?.img} alt="" />
                <h4 className='text-muted'>{item?.name}</h4>
                <h6 className='text-muted'>Suplier Name: {item?.supplier}</h6>
                <p>Price: ${item?.price}</p>
                <button onClick={() => handleDeleteItem(item?._id)} className='btn btn-warning'>Delete</button>
              </div>

            )
          }

        </div>

      </div>
      <div className='text-center pb-5'>
        <Link to='/addItem' className='text-center text-warning'>
          <button className='btn bg-warning'>Add New Item</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;