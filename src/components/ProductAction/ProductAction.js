import React from 'react';
import { useHistory } from 'react-router';
import './ProductAction.css'

const ProductAction = (props) => {
    const history = useHistory();
    const {name, brand, price, _id} = props.product;
    const edit = props.edit;

    const handleEditProduct = (id) => {
        // fetch(`http://localhost:5000/deleteProduct`,{
        //     method: 'DELETE',
        //     headers: {'content-type':'application/json'},
        //     body: JSON.stringify(id)
        // })
        // .then(res => {
        //     console.log(res)
        // })
    }

    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Delete successful !")
                history.push('/admin')
                // window.location.reload();
            }
        })
    }


    return (
        <div>
            <div className="row d-flex align-items-center hover-style">
                <div className="col-4"><h6>{name}</h6></div>
                <div className="col ml-1"><h6>{brand}</h6></div>
                <div className="col ml-3"><h6>{price}</h6></div>
                <div className="col ml-3">
                    {
                        edit 
                        ? <button onClick={() => handleEditProduct(_id)} className='btn btn-success btn-sm m-2'>Edit</button> 

                        : <button onClick={() => handleDeleteProduct(_id)} className='btn btn-danger btn-sm m-2'>Delete</button> 
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductAction;