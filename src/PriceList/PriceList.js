import React from 'react';
import './PriceList.css';

const PriceList = () => {
    return (
        <div className="container bg-pricelist">
            <div className="row d-flex">

                <div className="col-md-6 col-sm-12 col-lg-12 px-5">
                    <h3 className='text-danger'>Product List</h3>
                    <ol className="list-group list-group-numbered w-100">
                   
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                        
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Organic Strawberry</div>
                                
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 1000/kg</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Organic Apple</div>
                               
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 5000/kg</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Green Guava</div>
                               
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 200/kg</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Testy Banana</div>
                               
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 5000/dozen</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">King Of Fruity</div>
                               
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 1500/kg</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Fruity Oranges</div>
                               
                            </div>
                            <span className="badge bg-secondary rounded-pill">$ 1500/kg</span>
                        </li>
                    </ol>
                </div>

                <div className="col-md-6 col-sm-12 col-lg-12">
                    <p className='text-muted '>We grow over 50 different crops and several varieties of each item; this is just a partial list.
                    </p>
                    <p className='text-muted'>These prices are subject to change without notice. <span className='priceList'> Pictures shown</span> are from the seed catalogue websites.</p>
                </div>
            </div>
        </div>
    );
};

export default PriceList;