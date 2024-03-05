import React, { useState, useEffect } from 'react';
import { imageList } from '../model/images';

type props = {
    width:number
    height:number
    borderRadius:number
}
export const Gallery = ({width,height,borderRadius}:props) => {
    const [moveIndex, setMoveIndex] = useState(0);
    const imageItems = imageList

    useEffect(() => {
        const timer = setInterval(() => {
          setMoveIndex(prevIndex => {
            if (prevIndex < imageItems.length - 1) {
              return prevIndex + 1;
            } else {
              return 0;
            }
          });
        }, 3000);
        return () => clearInterval(timer);
      }, []);

      return (
        <div>
          {/* 선택된 이미지를 표시 */}
          <img src={imageItems[moveIndex]} alt="Gallery" style={{width:`${width}px`,height:`${height}px`,borderRadius:borderRadius}}/>
        </div>
      );
}