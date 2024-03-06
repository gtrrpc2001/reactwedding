import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@mui/material'
import { CreditCard } from "../creditcard/creditCard";

type props={
    width:number
    height:number
}

export const CongratulationGift = ({width,height}:props) => {

    const handleCopy = (accountNumber:string) => {
        alert("계좌번호가 복사되었습니다");
    };

    const buildButton = (receiver:string, accountNumber:string) => (
        <div>
          <span>{receiver}</span>
          <CopyToClipboard text={accountNumber} onCopy={handleCopy}>
            <Button>{accountNumber}</Button>
          </CopyToClipboard>
        </div>
    );    

    return (
        <div style={{width:width*0.8,height:height*0.9}}> 
            <div style={{marginTop:20,height:height*0.5}}>

            </div>
            <div style={{marginTop:20,height:height*0.3,textAlign:'center'}}>
              <h2 style={{ color: '#295234', fontWeight: "bold", fontSize: 20 }}>신랑 신부에게 마음 전하기</h2>
              {buildButton('신랑 이충헌', '카카오뱅크 3333-24-8680799')}
              {buildButton('신부 이알레이나', '하나은행 702-910962-53707')}
            </div>
            <div style={{height:height*0.05,display:'flex',justifyContent:'center',alignItems:'end'}}>
                <CreditCard />      
            </div>
        </div>
    );
}