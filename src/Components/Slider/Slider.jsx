import React from 'react'
import './Slider.css'
import { useSelector } from 'react-redux'

const Slider = () => {
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)


  return (
    <>
      <div style={{backgroundColor : bgcolor, color : txtcolor}}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
              <img src="https://i.pcmag.com/imagery/articles/05uthAxgkcAOKdZzRzXfMvf-11.1617741381.fit_lim.jpg"/>
              <div className='slidetext'>
              <h3>Laptop cleaning 101: Essential tips for a comprehensive maintenance routine</h3>
              <p>
              Keep your laptop in prime condition with our in-depth cleaning guide.</p>
              <button className='btn btn-outline-info'>Read More</button>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
              <img src="https://ea-unboxed-assets.croma.com/cromaunboxed-as/2024/06/sony-ult-wear-review-lead.png"/>
              <div className='slidetext'>
              <h3>Sony ULT Wear review</h3>
              <p>All about the bass</p>
              <button className='btn btn-outline-info'>Read More</button>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
              <img src="https://ea-unboxed-assets.croma.com/cromaunboxed-as/2024/06/What-is-an-AI-PC-Croma-unboxed_lead-image.png"/>
              <div className='slidetext'>
              <h3>What is an AI PC?</h3>
              <p>AI-powered laptops are all the rage right now, but what makes them different?</p>
              <button className='btn btn-outline-info'>Read More</button>
              </div>
              </div>
            </div>
            </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
