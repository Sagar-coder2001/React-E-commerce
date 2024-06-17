import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { selectCategory } from '../../Features/Allproductslice'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

const Category = () => {
  const bgcolor = useSelector((state) => state.theme.value);
  const txtcolor = useSelector((state) => state.theme.textcolor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [category , setCategory] = useState([
      {
        img : 'https://webstockreview.net/images/smartphone-icon-png-6.png',
        name : 'smartphones'
      },
      {
        img : 'https://cdn.pixabay.com/photo/2020/11/29/07/06/aroma-5786653_1280.png',
        name : 'fragrances'
      },
      {
        img : 'https://thumbs.dreamstime.com/z/skincare-vector-icon-isolated-white-background-outline-thin-line-skincare-icon-website-design-mobile-app-development-189437456.jpg',
        name : 'Skin-Care'
      },
      {
        img : 'https://cdn1.iconfinder.com/data/icons/cloths-and-shoes-1/48/cloth_clothing_wearing_fashion_womenswear_top_tshirt-512.png',
        name : 'tops'
      },
      {
        img : 'https://image.shutterstock.com/image-vector/womens-shoes-icon-vector-260nw-1063890302.jpg',
        name : 'womens-shoes'
      },
      {
        img : 'https://th.bing.com/th/id/OIP.fFFQuzkbQfivAURH_V7pRgHaH6?w=164&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        name : 'womens-bags'
      },
      {
        img : 'https://th.bing.com/th/id/OIP.wUnpByTvGnglaJiH7HJ2aAHaH_?w=183&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7',
        name : 'mens-shirts'
      },
      {
        img : 'https://thumbs.dreamstime.com/b/men-s-classic-wrist-watch-clock-icon-vector-gray-background-115614416.jpg',
        name : 'Mens Watches'
      },
      {
        img : 'https://th.bing.com/th/id/OIP.ceMCBqfO4khbBLKYpQjK8wHaHa?w=5120&h=5120&rs=1&pid=ImgDetMain',
        name : 'Laptops'
      },
      {
        img : 'https://clipground.com/images/beauty-icon-clipart.jpg',
        name : 'Beauty'
      }
    ]);

    const handlecart = (item) => {
      dispatch(selectCategory(item))
      navigate(`/products/${item}`)
    }
  return (
    <div>
      <div className='productheader' style={{backgroundColor: bgcolor}}>
          <h3 style={{color:txtcolor}}>All Category</h3>
          <div className='product-category'>
          {
            category.map((item) => {
              return(
                <div className="catcontainer">
                <div className="cat" onClick={() => handlecart(item.name) } key={item.name}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                </div>
                </div>
              )
            })
          }
          </div>
          </div>  
    </div>
  )
}

export default Category

