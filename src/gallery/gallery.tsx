import React, { useState } from 'react';
import { imageList } from '../model/images';
import flower from '../asset/images/flower.png'
import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type props = {
    width:number
    height:number
    borderRadius:number
}
export const Gallery = ({width,height,borderRadius}:props) => {
    const [moveIndex, setMoveIndex] = useState(0);    

    const handleChange = (index:number) => {
        setMoveIndex(index);
    }

    const renderSliders = imageList.map(m => (
        <div key={m.id}>
            <img src={m.url} alt={m.alt} style={{width:`${width * 0.8}px`,height:`${height * 0.6}px`,borderRadius:borderRadius}}/>
        </div>
    ))

      return (
        <div className='divGallery'>          
          <div className='divFlower'>
            <img className='flower-image' src={flower} alt='flower'/>                        
          </div>          
          <div className='gallery-text'>
            <h2 style={{color: '#295234', fontWeight: 'bold', fontSize: 17,marginTop:0}}>            
                {'Photo Gallery'}
            </h2>
          </div>
          <div className='gallery'>
            <div style={{width:width * 0.8, height:height * 0.6, objectFit:'cover'}}>              
              <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              interval={3000}
              emulateTouch={true}
              showIndicators={false}
              selectedItem={moveIndex}
              onChange={handleChange}            
              >
                  {renderSliders}
              </Carousel>
            </div>
          </div>
        </div>
      );
}
