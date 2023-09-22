import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder, clearCart } from '../../redux/reducer/ecomReducer';
import { HOME } from '../../router/keys';
import { Navbar } from '../../component';

const Purchase = () => {
    const {user,cart} = useSelector(state => state.ecom);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log("Cart -", cart);
    const handlePurchase = () =>{
        dispatch(addOrder());
        dispatch(clearCart());
        alert("Thank you for purchasing");
        navigate(HOME);
    }
  return (
    <>
    <Navbar />
    <div>
      <center><h1>Purchase Data</h1></center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
          cart.length > 0 && cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price * item.cartQuantity}</td>
              <td>{item.cartQuantity}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <div>
        <br />
        <br />
        <br />
          <p>Name : {user.name}</p>
          <p>Contact No. : {user.mobile}</p>
          <p>Shipping Address : {user.address}</p>
      </div>
      <button onClick={handlePurchase}>Confirm</button>

    </div>
    </>
  );
};

export default Purchase;
