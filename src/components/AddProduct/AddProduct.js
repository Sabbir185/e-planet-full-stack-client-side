import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
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
            const url = `http://localhost:5055/addProduct`;
            fetch(url,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(productData)
            })
            .then(res => {
                console.log(res)
            })
        }
    };

    const handleImage = (event) => {
        // console.log(event.target.files[0].name)
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
                    <h1>Add a new product</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input name="name" ref={register({ required: true })} placeholder=' product name' className='form-control mt-3'/>
                        {errors.name && <span className='text-danger'>product name is required</span>}

                        <input name="brand" ref={register({ required: true })} placeholder=' brand name' className='form-control mt-2'/>
                        {errors.brand && <span className='text-danger' >brand name is required</span>}
                    
                        <input name="price" ref={register({ required: true })} placeholder=' price' className='form-control mt-2'/>
                        {errors.price && <span className='text-danger'>price is required</span>}

                        
                        <input name="file" type='file' onChange={handleImage} ref={register({ required: true })} placeholder=' price' className='form-control-file mt-2'/>
                        {errors.file && <span className='text-danger'>product image is required</span>}
                        
                        <input className='btn btn-warning mt-2 d-block' type="submit" value='Add'/>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default AddProduct;