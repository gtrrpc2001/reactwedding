import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

type props={
    width:number
    height:number
}

export const CongratulationGift = ({width,height}:props) => {
    const [visible, setVisible] = useState(false);

    const handleCopy = (accountNumber:string) => {
        alert("계좌번호가 복사되었습니다");
    };

    const buildButton = (receiver:string, accountNumber:string) => (
        <div>
          <span>{receiver}</span>
          <CopyToClipboard text={accountNumber} onCopy={handleCopy}>
            <button>{accountNumber}</button>
          </CopyToClipboard>
        </div>
    );

    const noClipboardButton = (receiver:string) => (
        <div>
          <button onClick={() => setVisible(!visible)}>{receiver}</button>
        </div>
    );

    const getVisibleText = () => (
        visible && (
          <div>
            <p>신랑 이충헌 : 카카오뱅크 3333-24-8680799</p>
            <p>신부 이알레이나 : 하나은행 702-910962-53707</p>
          </div>
        )
      );

      return (
        <div style={{ marginTop:20 ,width:width*0.8,height:height*0.8,textAlign:'center'}}>
          <h2 style={{ color: '#295234', fontWeight: "bold", fontSize: 20 }}>신랑 신부에게 마음 전하기</h2>
          {buildButton('신랑 이충헌', '카카오뱅크 3333-24-8680799')}
          {buildButton('신부 이알레이나', '하나은행 702-910962-53707')}
          {noClipboardButton('계자번호가 복사가 안될 경우 클릭')}
          {getVisibleText()}
        </div>
      );
}