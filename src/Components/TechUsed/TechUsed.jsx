import React, { useState } from 'react'
import './TechUsed.css'

//Front-End Banners
import img1 from '../Assets/SVGToJPG/Expo.png'
import img2 from '../Assets/SVGToJPG/materialUI.png'
import img3 from '../Assets/SVGToJPG/nextJS.png'
import img4  from '../Assets/SVGToJPG/reactJS.png'
import img5 from '../Assets/SVGToJPG/reactNative.png'
import img6  from '../Assets/SVGToJPG/redux.png'
import img7 from '../Assets/SVGToJPG/styledcomponents.png'
import img8 from '../Assets/SVGToJPG/tailwindCSS.png'


//Back-End Banners

//Cloud Banners

//Database Banners



export const TechUsed = () => {

  const frontendimages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const backendimages = [img1, img3];

  const cloudimages = [img2, img4];

  const databaseimages = [img2, img4];

  const [currentImageIndexFront, setCurrentImageIndexFront] = useState(0);
  const [currentImageIndexBack, setCurrentImageIndexBack] = useState(0);
  const [currentImageIndexCloud, setCurrentImageIndexCloud] = useState(0);
  const [currentImageIndexDatabase, setCurrentImageIndexDatabase] = useState(0);



  const handleClick = () => {
    setCurrentImageIndexFront((currentImageIndexFront + 1) % frontendimages.length);
   };

   const handleClick2 = () => {
    setCurrentImageIndexBack((currentImageIndexBack + 1) % backendimages.length);
   };

   const handleClick3 = () => {
    setCurrentImageIndexCloud((currentImageIndexCloud + 1) % cloudimages.length);
   };

   const handleClick4 = () => {
    setCurrentImageIndexDatabase((currentImageIndexDatabase + 1) % databaseimages.length);
   };
   

  return (
    <div id='technology' className='techused__mainbody'>
      <h1>Technology Used</h1>


    <div className='techused__containerclass'>
      <div className='techused__frontend'>
        <h3>
          Front-End:
        </h3>
      </div>
      <div className='frontend__slider-wrapper'>
          <div className='frontend__slider'>
          <img src={frontendimages[currentImageIndexFront]} alt="Current" />
          </div>
          <button onClick={handleClick}>
            <span className="frontend__slider-wrapper_transition"></span>
            <span className="frontend__slider-wrapper_gradient"></span>
            <span className="frontend__slider-wrapper_label">Next Image</span></button>
      </div>

      <div className='techused__frontend'>
        <h3>
          Back-End:
        </h3>
      </div>
      <div className='frontend__slider-wrapper'>
          <div className='frontend__slider'>
          <img src={backendimages[currentImageIndexBack]} alt="Current" />
          </div>
          <button onClick={handleClick2}>
            <span className="frontend__slider-wrapper_transition"></span>
            <span className="frontend__slider-wrapper_gradient"></span>
            <span className="frontend__slider-wrapper_label">Next Image</span></button>
      </div>



      <div className='techused__frontend'>
        <h3>
          Cloud:
        </h3>
      </div>
      <div className='frontend__slider-wrapper'>
          <div className='frontend__slider'>
          <img src={cloudimages[currentImageIndexCloud]} alt="Current" />
          </div>
          <button onClick={handleClick3}>
            <span className="frontend__slider-wrapper_transition"></span>
            <span className="frontend__slider-wrapper_gradient"></span>
            <span className="frontend__slider-wrapper_label">Next Image</span></button>
      </div>


      <div className='techused__database'>
        <h3>
          Database:
        </h3>
      </div>
      <div className='frontend__slider-wrapper'>
          <div className='frontend__slider'>
          <img src={databaseimages[currentImageIndexDatabase]} alt="Current" />
          </div>
          <button onClick={handleClick4}>
            <span className="frontend__slider-wrapper_transition"></span>
            <span className="frontend__slider-wrapper_gradient"></span>
            <span className="frontend__slider-wrapper_label">Next Image</span></button>
      </div>

      
    </div>
  </div>
  )
}
