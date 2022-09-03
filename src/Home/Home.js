import React from 'react';
import { Link } from 'react-router-dom';
import Faqs from '../Faqs/Faqs';
import Items from '../Items/Items';
import PriceList from '../PriceList/PriceList';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div className='pb-5'>
      <Banner></Banner>
      <Items></Items>
      <PriceList></PriceList>
      <Faqs></Faqs>
      <div className='text-center pb-5'>
        <Link to='/manageInventories' >
          <button className='btn bg-warning'>Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;