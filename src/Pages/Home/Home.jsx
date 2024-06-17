import Layout from '../../Components/Layout/Layout'
import "./Home.css";
import { useState } from 'react';
import Category from '../../Components/Category/Category.jsx';
import Offer from '../../Components/Offers/Offer.jsx';
import Brands from '../../Components/Brands/Brands.jsx';
import Slider from '../../Components/Slider/Slider.jsx';
import { useSelector } from 'react-redux';

export default function Home() {
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)
  const [index , setIndex] = useState(0);
  const slide = [
    {
      img : 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718366437/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/June/15062024/Desktop/HP_Rotating_Oneplus_15june24_o6nplq.jpg',
      name : 'i phone'
    },
    {
      img : 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718366437/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/June/15062024/Desktop/HP_Rotating_Samsung_15june24_jo0cfr.jpg',
      name : 'Nike Shoes'
    },
    {
      img : 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718366438/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/June/15062024/Desktop/HP_Rotating_SW_15june24_xw2s3h.jpg',
      name : 'Nike Shoes'
    },
    {
      img : 'https://img.freepik.com/free-psd/running-shoes-banner-template_23-2148681438.jpg',
      name : 'Nike'
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
      <div style={{backgroundColor : bgcolor , color : txtcolor}}>
      <div className="home-container">
        <div className="container">
          <button onClick={prevSlide} className='prev'><i className="fa-solid fa-chevron-left"></i></button>
          <img src={slide[index].img}/>
          <span>Buy Now</span>
          <button onClick={nextSlide} className='next'><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
      </div>
      <Category/>
      <Offer/>
      <Slider/>
      <Brands/>
     </Layout>
    </>
  )
}
