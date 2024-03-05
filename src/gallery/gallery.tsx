import React, { useState, useEffect } from 'react';
import { imageList } from '../model/images';

export const Gallery = () => {
    const [moveIndex, setMoveIndex] = useState(-1);
    const imageItems = imageList

    useEffect(() => {
        const timer = setInterval(() => {
          setMoveIndex(prevIndex => {
            if (prevIndex < imageItems.length - 1) {
              return prevIndex + 1;
            } else {
              return -1;
            }
          });
        }, 3000);
        return () => clearInterval(timer);
      }, []);

      return (
        <div>
          {/* 선택된 이미지를 표시 */}
          <img src={imageItems[moveIndex]} alt="Gallery" />
        </div>
      );
}