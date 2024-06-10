import React, { useState , useEffect } from 'react'
import axios from 'axios';
import './Offer.css'
import { useSelector , useDispatch} from 'react-redux';
import { selectProduct } from '../../Features/Selectedproductslice';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
    const fetchAllData = async () => {
      const res = await axios ('https://dummyjson.com/products')
      setData(res.data.products);
    }
    fetchAllData();
  },[]);

  const bgcolor = useSelector((state) => state.theme.value);
  const txtcolor = useSelector((state) => state.theme.textcolor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    dispatch(selectProduct(item));
    navigate(`/product/${item.id}`);
  };

  return (
  <>
    <div>
        <div className="offers-container" style={{backgroundColor : bgcolor}}>
        <h2  style={{ color : txtcolor}}>Limited Time Offer</h2>
        <div className="offer-container">
        {
            data.filter((item) => {
                return(
                    item.id < 5
                )
            })
            .map((item) => {
                return(
                    <div>
                       
                        <div className="offer" onClick={() => {handleProductClick(item)}}>
                        <h2>{item.title}</h2>
                        <img src={item.images[0]} alt="" />
                        <p> $ {item.price}</p>
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
