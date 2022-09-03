import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://young-sands-62072.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className=' text-center mb-3'> <span className='text-danger p-2 '>Inventory</span></h1>
                <div className="items-container mb-5 ">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;