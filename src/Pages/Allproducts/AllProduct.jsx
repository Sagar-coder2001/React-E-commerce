import React, { useEffect, useState } from 'react'
import axios from "axios"
import './AllProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectProduct } from '../../Features/Selectedproductslice'
import { useNavigate } from 'react-router-dom';
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

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     const res = await axios ('https://dummyjson.com/products')
  //     setProduct(res.data.products);
  //   }
  //   fetchAllData();
  // },[])

  const handleProductClick = (item) => {
    dispatch(selectProduct(item));
    navigate(`/product/${item.id}`);
  };

   const handleAddToCart = (event, item) => {
    event.stopPropagation();
    // Add your add to cart logic here
    console.log(`Adding ${item.title} to cart`);
    dispatch(addtocartproduct(item))
  };

  return (
    <>
      <div>
        <div className='allproductcontainer' style={{ backgroundColor: bgcolor }}>
          <Layout>
            <div className="card-container">
              {
                product.map((item) => {
                  return (
                    <>
                      <div className="card" key={item.id} onClick={() => {
                        handleProductClick(item)
                      }}>
                        <img src={item.images[0]} alt="" />
                        <h5>{item.category}</h5>
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
