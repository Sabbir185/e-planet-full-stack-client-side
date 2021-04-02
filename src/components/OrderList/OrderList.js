import React from 'react';

const OrderList = (props) => {
    const {name, price, orderTime} = props.orderInfo.product;

    return (
        
        <tr>
            <td>#</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{(new Date(orderTime)).toDateString('dd/MM/yyyy')}</td>
        </tr>
                
    );
};

export default OrderList;