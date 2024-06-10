import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css';

export default function Cart({ mode }) {
  const products = useSelector((state) => state.addproduct.cartItems);
  const totalamount = useSelector((state) => state.addproduct.totalAmount);

  console.log(products)

  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)

  

  return (
    <Layout>
      <div className="cartcontainer" style={{ backgroundColor: bgcolor, color: txtcolor }}>
        <h3 className='text-center'>Shopping Cart</h3>
        {
          products.map((item) => {
            return (
              <div >
                <div className="cart-container">
                  <div className="cart">
                    <img src={item.imgurl} />
                    <div style={{ textAlign: 'center' }} className='cartname'>
                      <h5>{item.productName}</h5>
                      <button>+</button>0
                      <button>-</button>
                    </div>
                    <p>{item.price}</p>
                    <i class="fa-solid fa-trash"></i>
                  </div>
                  <hr />
                </div>

              </div>
            )
          })
        }
        <div className="cart-button">
          <button className='btn btn-success'>Buy Now</button>
          <button className='btn btn-success'>Checkout</button>
        </div>
      </div>
    </Layout>
  )
}
