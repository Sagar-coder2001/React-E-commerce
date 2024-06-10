import Layout from '../../Components/Layout/Layout'
import "./Home.css";
import { useState } from 'react';
import Category from '../../Components/Category/Category.jsx';
import Offer from '../../Components/Offers/Offer.jsx';

export default function Home() {
  const [index , setIndex] = useState(0);
  const slide = [
    {
      img : 'https://as1.ftcdn.net/v2/jpg/02/07/92/80/1000_F_207928043_CfS9KgW2M7O1mKdKBNOvpPOaES7HTytV.jpg',
      name : 'Nike'
    },
    {
      img : 'https://img.freepik.com/free-psd/sneakers-sale-template-landing-page_23-2148748545.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715558400&semt=ais_user',
      name : 'Nike Shoes'
    },
    {
      img : 'https://img.freepik.com/free-psd/black-friday-banner-with-discounts-3d-rendering_1419-2424.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715558400&semt=ais_user',
      name : 'Nike Shoes'
    },
    {
      img : 'https://img.freepik.com/free-psd/running-shoes-banner-template_23-2148681438.jpg',
      name : 'Nike'
    },
    {
      img : 'https://i.pinimg.com/736x/3a/3e/f4/3a3ef43429c62602c96b69ae9efeb886.jpg',
      name : 'Nike Shoes'
    },
    {
      img : 'https://img.freepik.com/premium-vector/sneakers-shoes-sale-banner-template_565202-173.jpg',
      name : 'Nike Shoes'
    }
  ]

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slide.length) % slide.length);
  }

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slide.length);
  }

  return (
    <>
    <Layout>
      <div className="home-container">
        <div className="container">
          <button onClick={prevSlide} className='prev'><i className="fa-solid fa-chevron-left"></i></button>
          <img src={slide[index].img}/>
          <span>Buy Now</span>
          <button onClick={nextSlide} className='next'><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
      
      <Category/>
      <Offer/>
     </Layout>
    </>
  )
}
