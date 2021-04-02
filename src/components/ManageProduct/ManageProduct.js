import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductAction from '../ProductAction/ProductAction';
import './ManageProduct.css'


const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(()=>{
        const url = `https://sabbir185-eplanetshop.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setManageProducts(data))
    },[])


    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">

                    <h1>Manage Product or <button className='btn btn-primary btn-sm'><Link to='/' ><span className='text-light'>Home</span></Link></button></h1>

                    <div>
                        <div className="row mb-4 mt-4 bg-color rounded">
                            <div className="col-4"> <h4> Product Name </h4> </div>
                            <div className="col"> <h4> Brand </h4> </div>
                            <div className="col"> <h4> Price </h4> </div>
                            <div className="col"> <h4> Action </h4> </div>
                        </div>
                        {
                            manageProducts.map(pd => <ProductAction product={pd} key={pd._id}></ProductAction>)
                        }
                    </div>

                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default ManageProduct;