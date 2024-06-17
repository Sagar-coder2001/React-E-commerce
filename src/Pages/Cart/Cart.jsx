import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css';
import { deleteItem } from '../../Features/Addproductslice';

export default function Cart({ mode }) {
  const products = useSelector((state) => state.addproduct.cartItems);
  const totalamount = useSelector((state) => state.addproduct.totalAmount);

  const dispatch = useDispatch();
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)

  const removeItem = (itemid) => {
    dispatch(deleteItem(itemid));
  }
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
                      <button>+</button>0
                      <button>-</button>
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
