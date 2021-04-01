import React from 'react';

const OrderList = (props) => {
    const {name, price, orderTime} = props.orderInfo.product;

    return (
        
        <tr>
            <td>#</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{orderTime}</td>
        </tr>
                
    );
};

export default OrderList;