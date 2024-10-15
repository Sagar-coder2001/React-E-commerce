import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Offer.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct } from '../../Features/Selectedproductslice';
import { useNavigate } from 'react-router-dom';
import { addtocartproduct } from '../../Features/Addproductslice';

const Offer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/category/laptops');
        setData(res.data.products);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
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
    dispatch(addtocartproduct(item));
  };

  return (
    <>
      <div style={{ backgroundColor: bgcolor, color: 'black' }}>
        <div className="offers-container">
          <h2 style={{ color: txtcolor }}>Limited Time Offer</h2>
          <div className="offer-container">
            {loading ? ( // Show loader if loading is true
              <div className="loader" style={{fontSize:'30px'}}>Loading...</div>
            ) : (
              data.map((item) => (
                <div key={item.id}>
                  <div className="offer" onClick={() => handleProductClick(item)}>
                    <img src={item.images[0]} alt={item.title} />
                    <h2>{item.title}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px 0px' }} className='price'>
                      <span>$ {item.price}</span>
                      <span style={{textDecoration :'line-through'}}>${item.price + 400}</span>
                    </div>
                    <button className='btn btn-info' onClick={(event) => handlecart(event, item)}>
                      Add Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
