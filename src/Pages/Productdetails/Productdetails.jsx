import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom'
import './Productdetails.css'
import { addtocartproduct } from '../../Features/Addproductslice';


const Productdetail = () => {
  const product = useSelector((state) => state.selectedProduct);
  console.log(product)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)
  const [mainImage, setMainImage] = useState(product.images[0]);

  if (!product) {
    navigate('/');
    return null;
  }

  const handlecart = (product) => {
    dispatch(addtocartproduct(product));
  }
  return (
    <Layout>
      <div style={{backgroundColor : bgcolor , color : txtcolor}}>
        <div className="singleproduct" >
          <div className="leftproduct">
            <img src={mainImage} alt={product.title} />
            <div className="diffimages">
            {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  onClick={() => setMainImage(image)} // Update main image on click
                  className="thumbnail-image"
                />
              ))}
        </div>
          </div>
          <div className="rightproduct">
            <button onClick={() => navigate(`/products/${product}`)} className='back' style={{color : txtcolor}}>Go Back</button>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => {
              handlecart(product)
            }} style={{color : txtcolor}}>Add Cart</button>
            <button style={{marginLeft : '5px', color : txtcolor}}>Buy Now</button>
          </div>
        </div>
        {/* <div className="diffimages">
            <img src= {  product.images[1]}alt="" />
            <img src= {  product.images[2]}alt="" />
            <img src= {  product.images[3]}alt="" />
        </div> */}
      </div>
    </Layout>
  );
};
export default Productdetail
