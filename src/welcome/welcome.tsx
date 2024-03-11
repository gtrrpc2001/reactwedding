import { useEffect, useState } from "react";
import './welcome.css'
import divider from '../asset/images/divider.png'
import water from '../asset/images/water.jpg'
import { Introduction } from "../introduce/introduce";
import dayjs from 'dayjs'
import { afternoon, hour, min, weddingTime, yoil } from "../model/times";

type props = {
    width:number
    height:number
}

export const Welcome = ({width,height}:props) => {
    const dd = `${weddingTime.replaceAll('-','.')} ${yoil}요일 ${afternoon} ${hour}시 ${min}분`
    const dday = dayjs(weddingTime);
    const today = dayjs();    
    const difference = today.diff(dday, 'day');
    const ddayText =  `그 날까지 `;

    return (
    <div className="welcome">
      <div className="image-container" style={{ height: height * 0.45 }}>
        <img src={water} alt="Background" className="background-image" />        
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
        <p>{ddayText}<span style={{color: '#295234', fontWeight: 'bold'}}>{`D${difference}`}</span></p>                
      </div>
      <div className="explain">
        <img src={divider} alt="line" className="line" />
        <Introduction dday={dd}/>
        <img src={divider} alt="line" className="line" />
      </div>
    </div>
    )
}