import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Offer.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct } from '../../Features/Selectedproductslice';
import { useNavigate } from 'react-router-dom';
import { addtocartproduct } from '../../Features/Addproductslice';

const Offer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      const res = await axios('https://dummyjson.com/products/category/laptops')
      setData(res.data.products);
    }
    fetchAllData();
  }, []);

  const bgcolor = useSelector((state) => state.theme.value);
  const txtcolor = useSelector((state) => state.theme.textcolor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    dispatch(selectProduct(item));
    navigate(`/product/${item.id}`);
  };

  const handlecart = (event, item) => {
    event.stopPropagation();
    dispatch(addtocartproduct(item))
  }
  return (
    <>
      <div style={{ backgroundColor: bgcolor, color: 'black' }}>
        <div className="offers-container">
          <h2 style={{ color: txtcolor }}>Limited Time Offer</h2>
          <div className="offer-container">
            {
              data.map((item) => {
                return (
                  <div>

                    <div className="offer" onClick={() => { handleProductClick(item) }}>
                      <img src={item.images[0]} alt="" />
                      <h2>{item.title}</h2>
                      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0px' }} className='price'>
                        <span>$ {item.price}</span>
                        <span style={{textDecoration :'line-through'}}>${item.price + 400}</span>
                      </div>
                      <button className='btn btn-info' onClick={(event) => {
                        handlecart(event, item)
                      }}>Add Cart</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
