import { useEffect, useState } from "react";
import './welcome.css'
import divider from '../asset/images/divider.png'
import { Introduction } from "../introduce/introduce";

type props = {
    width:number
    height:number
}

export const Welcome = ({width,height}:props) => {
    const dd = "2024.12.31 토요일 낮 12시 30분"
    const dday = new Date(2024, 12, 31);
    const today = new Date(2024,3,5);
    const difference = Math.floor((+dday - +today) / (1000 * 60 * 60 * 24));
    const ddayText =  `그 날까지 D-${difference}`;

    return (
    <div className="welcome">
      <div className="image-container" style={{ height: height * 0.45 }}>
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
        <p>{dd}</p>
        <p>{ddayText}</p>                
      </div>
      <div className="explain">
        <img src={divider} alt="line" className="line" />
        <Introduction dday={dd}/>
        <img src={divider} alt="line" className="line" />
      </div>
    </div>
    )
}