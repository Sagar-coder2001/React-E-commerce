import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom'
import './Productdetails.css'
import { addtocartproduct } from '../../Features/Addproductslice';


const Productdetail = () => {
  const product = useSelector((state) => state.selectedProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)
  if (!product) {
    navigate('/');
    return null;
  }

  const handlecart = (product) => {
    dispatch(addtocartproduct(product));
  }
  return (
    <Layout>
      <div>
        <div className="singleproduct" style={{backgroundColor : bgcolor , color : txtcolor}}>
          <div className="leftproduct">
            <img src={product.images[0]} alt={product.title} />
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
      </div>
    </Layout>
  );
};
export default Productdetail
