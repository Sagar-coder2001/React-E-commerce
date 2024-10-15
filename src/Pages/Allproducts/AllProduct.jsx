import React, { useEffect, useState } from 'react'
import axios from "axios"
import './AllProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduct } from '../../Features/Selectedproductslice'
import { json, useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout'
import './AllProduct.css';
import Offer from '../../Components/Offers/Offer.jsx'
import { addtocartproduct } from '../../Features/Addproductslice.jsx'

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategory = useSelector((state) => state.category);
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategory) {
          const res = await axios(`https://dummyjson.com/products/category/${selectedCategory}`);
          setProduct(res.data.products);
        }
      }
      catch (error) {
      }
    }
    if (selectedCategory) {
      fetchData();
    }
  }, [selectedCategory]);

  const handleProductClick = (item) => {
    window.scrollTo(0,0);
    dispatch(selectProduct(item));
    navigate(`/product/${item.id}`);
  };

  const handleAddToCart = (event, item) => {
    event.stopPropagation();
    console.log(`Adding ${item.title} to cart`);
  
    // Retrieve the current cart from local storage
    const currentCart = JSON.parse(localStorage.getItem('cartitem')) || [];
  
    // Check if the item is already in the cart
    const itemExists = currentCart.some(cartItem => cartItem.id === item.id); // Adjust based on your item's unique identifier
  
    if (!itemExists) {
      // If the item is not in the cart, add it
      currentCart.push(item);
      localStorage.setItem('cartitem', JSON.stringify(currentCart));
      dispatch(addtocartproduct()); // Assuming this function handles adding to your global state
    } else {
      alert(`${item.title} is already in the cart.`);
    }
  };
  

  return (
    <>
      <div>
        <div className='allproductcontainer' style={{ backgroundColor: bgcolor, color : txtcolor}}>
          <Layout>
            <div className='product-container'>
              <h2>Explore Our {selectedCategory} New Products</h2>
              <p>Stay comfortable and stylish with the wide selection of sweatshirts available at Codeswear.com. Our sweatshirts are perfect for every occasion, whether you're looking for a casual everyday sweatshirt or something to wear to the gym. We have a variety of styles to choose from, including coding sweatshirts, anime sweatshirts, and casual sweatshirts for everyday wear.</p>
            </div>
            <div className="card-container">
              {
                product.map((item) => {
                  return (
                    <>
                      <div className="card" key={item.id} onClick={() => {
                        handleProductClick(item)
                      }}>
                        <img src={item.images[0]} alt="" />
                        <h5>{item.title}</h5>
                        <p>$ {item.price}</p>
                        <button className='add-to-cart btn btn-info' onClick={(event) => handleAddToCart(event, item)}>Add Cart</button>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <Offer/>
          </Layout>
        </div>
      </div>

    </>
  )
}

export default AllProduct
