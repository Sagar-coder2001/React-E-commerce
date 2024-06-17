import React from 'react'
import './Brands.css';
import { useSelector } from 'react-redux';

const Brands = () => {

    const bgcolor = useSelector((state) => state.theme.value);
    const textcolor = useSelector((state) => state.theme.textcolor);

  return (
    <>
    <div style={{backgroundColor : bgcolor, color : textcolor}}>
        <div className="brands-container">
            <div className="service">
                <h4>Brands We Are Passionate About</h4>
            </div>
            <div className="brands">
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249301/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/1_trfali.png?tr=w-720"/>
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713447619/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/2_kj0z3t.png?tr=w-720"/>
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/4_akzof7.png?tr=w-720"/>
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249325/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/7_euz6d8.png?tr=w-720"/>
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249330/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/8_ejmzg3.png?tr=w-720" />
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249321/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/6_v1srlk.png?tr=w-720"/>
                </div>
                <div className="brand">
                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713249316/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/16th%20April/desk/5_xsvgvj.png?tr=w-720"/>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Brands
