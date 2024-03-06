import hand from '../asset/images/hand.png'
import './introduce.css'

type props={
    dday:string
}

export const Introduction = ({dday}:props) => {
    const buildName = (father:string, mother:string, order:string, name:string) => {
        return (
          <div className="name-container">
            <div className="parents">
              <p style={{fontSize: 13}}>{father}</p>
              <p style={{fontSize: 13}}>{mother}</p>
            </div>
            <p>{`의 ${order} `}</p>
            <p style={{fontSize: 17, fontWeight: 'bold'}}>{name}</p>
          </div>
        );
      };
    
      return (
        <div className="introduction" >
          <img 
            src={hand}
            alt="Hand" 
            className="hand-image" 
          />
          <h2 style={{color: '#295234', fontWeight: 'bold', fontSize: 17}}>
            초대합니다
          </h2>
          <p className="introduction-text">
            풋풋한 23살, 12월에 만난 저희는 <br />
            취준부터 한국생활까지 <br />
            5년이란 세월을 함께하며 사랑하고 성장해왔습니다.<br /><br />
            이제 저희 두 사람 연인이 아닌 <br />
            가족으로 새로운 출발을 하려합니다. <br />
            귀한 걸음하시어 축복해 주시면 감사하겠습니다 <span className="heart">❤</span>
          </p>
          {buildName('이재국', '정주영', '장남', '충헌')}
          {buildName('압둘라흐', '귤렐', '장녀', '알레이나')}
          <h2 style={{color: '#295234', fontWeight: 'bold', fontSize: 17}}>            
            {dday}
          </h2>
        </div>
      );
}
