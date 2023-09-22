import React from 'react';
import "./order.css"
import { useSelector } from 'react-redux';
import { Navbar } from '../../component';

const Orders = () => {
    const {orders} = useSelector(state=>state.ecom)
  return (
    <>
    <Navbar />
    <div>
      <center><h1>Order History</h1></center>
      {orders.map((innerArray, index) => (
        <div key={index}>
          <h2 className='order-heading'>Order {index + 1}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {innerArray.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td>{item.name}</td>
                  <td>{item.price * item.cartQuantity}</td>
                  <td>{item.cartQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </>
  );
};

export default Orders;
