import React, { useEffect, useState } from 'react';

const ProductCard = () => {
    const [products, setProducts] = useState({});
    useEffect(()=>{
        const url = ``;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className=''>
            
        </div>
    );
};

export default ProductCard;