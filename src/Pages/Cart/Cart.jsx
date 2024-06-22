import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css';
import { deleteItem , updateQuantity } from '../../Features/Addproductslice';

export default function Cart({ mode }) {
  const products = useSelector((state) => state.addproduct.cartItems);
  const totalamount = useSelector((state) => state.addproduct.totalAmount);

  const dispatch = useDispatch();
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)

  const removeItem = (itemid) => {
    dispatch(deleteItem(itemid));
  }

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: product.quantity || 1 }), {})
  );

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities, [id]: (prevQuantities[id] || 1) + 1 };
      dispatch(updateQuantity({ id, quantity: newQuantities[id] }));
      return newQuantities;
    });
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => {
      if (prevQuantities[id] > 1) {
        const newQuantities = { ...prevQuantities, [id]: prevQuantities[id] - 1 };
        dispatch(updateQuantity({ id, quantity: newQuantities[id] }));
        return newQuantities;
      }
      return prevQuantities;
    });
  };
  return (
    <Layout>
      <div className="cartcontainer" style={{ backgroundColor: '#0E1027', color: 'white' }}>
        <div className="section">
        <h3 className='text-center'>Shopping Cart</h3>
        {
          products.map((item) => {
            return (
              <div >
                <div className="cart-container">
                  <div className="cart">
                    <img src={item.image[0]} />
                    <div style={{ textAlign: 'center' }} className='cartname'>
                      <h5>{item.productName}</h5>
                      <button  onClick={() => incrementQuantity(item.id)}>+</button>
                      {quantities[item.id] || 1}
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                    </div>
                    <p>{item.price}</p>
                    <i class="fa-solid fa-trash" onClick={() =>{
                      removeItem(item.id);
                    }}></i>
                  </div>
                  <hr />
                </div>
              </div>
            )
          })
        }
        <div className="subtotal">
          <h4>Subtotal</h4>
          <p>{totalamount}</p>
        </div>
        <div className="cart-button">
          <button className='btn btn-success'>Buy Now</button>
          <button className='btn btn-success'>Checkout</button>
        </div>
        </div>
      </div>
    </Layout>
  )
}
