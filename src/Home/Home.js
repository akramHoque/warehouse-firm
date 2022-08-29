import React from 'react';
import Faqs from '../Faqs/Faqs';
import Items from '../Items/Items';
import PriceList from '../PriceList/PriceList';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
       <h1 className='text-center mt-5 px-3'>Organic Fruits Warehouse</h1>
            <h3 className=' text-center'><span className='text-danger'>Fresh and tasty</span></h3>
            <Banner></Banner>
            <Items></Items>
            <PriceList></PriceList>
            <Faqs></Faqs>
    </div>
  );
};

export default Home;