import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const AddProduct = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            brand: data.brand,
            price: data.price,
            orderTime: new Date(),
            imageLink: imageURL
        };
        if(imageURL !== null ){
            const url = `https://sabbir185-eplanetshop.herokuapp.com/addProduct`;
            fetch(url,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(productData)
            })
            .then(res => {
                if(res){
                    alert("Successfully added new product!");
                    history.push('/')
                }
            })
        }
    };

    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key','c6068c9ca763af9c1a9219fdd0781a55');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div>
    
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <h1>Add a new product or <button className='btn btn-primary btn-sm'><Link to='/' ><span className='text-light'>Home</span></Link></button></h1>
                    <form onSubmit={handleSubmit(onSubmit)}  className='mt-4'>
                        <small><em className='text-secondary'>Upload product image</em></small>

                        <input name="file" type='file' onChange={handleImage} ref={register({ required: true })} placeholder=' price' className='form-control-file mt-2'/>
                        {errors.file && <span className='text-danger'>product image is required</span>}
                        
                        <input name="name" ref={register({ required: true })} placeholder=' product name' className='form-control mt-3'/>
                        {errors.name && <span className='text-danger'>product name is required</span>}

                        <input name="brand" ref={register({ required: true })} placeholder=' brand name' className='form-control mt-2'/>
                        {errors.brand && <span className='text-danger' >brand name is required</span>}
                    
                        <input name="price" ref={register({ required: true })} placeholder=' price' className='form-control mt-2'/>
                        {errors.price && <span className='text-danger'>price is required</span>}

                        <input className='btn btn-info mt-3 d-block' type="submit" value='Add Product'/>
                        
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default AddProduct;