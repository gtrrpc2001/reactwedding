import { useEffect, useState } from "react";
import './welcome.css'
import divider from '../asset/images/divider.png'

type props = {
    width:number
    height:number
}

export const Welcome = ({width,height}:props) => {
    // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setWindowHeight(window.innerHeight);
    //   };
  
    //   window.addEventListener('resize', handleResize);
  
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };      
    // }, []);

    const dday = new Date(2024, 12, 31);
    const today = new Date(2024,3,5);
    const difference = Math.floor((+dday - +today) / (1000 * 60 * 60 * 24));
    const ddayText =  `그 날까지 D-${difference}`;

    return (
    <div className="welcome">
      <div className="image-container" style={{ height: height * 0.75 }}>
        <img src="./water.jpg" alt="Background" className="background-image" />
        <div className="title-text">
          함께하는 첫 시작
          <br />
          <br />
          이충헌
          <br />
          &
          <br />
          이알레이나
        </div>
      </div>
      <div className="subtitle-text">
        {/* 'datesList'는 정의되지 않았으므로, 임의의 날짜를 사용 */}
        <p>2024.12.31 토요일 낮 12시 30분</p>
        <p>{ddayText}</p>                
      </div>
    </div>
    )
}