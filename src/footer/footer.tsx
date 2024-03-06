import { iconID, iconList } from "../model/icons";
import './footer.css'

type props={
    clickHandler:(e:React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export const Footer = ({clickHandler}:props) => {    
    return (
        <div className="footer" style={{display:'flex', justifyContent:'center'}}>
            {iconList.map((d,index) => 
                <div className="footerBtn" style={{marginLeft: index === 0 ? 0 : 30}}>
                    <img id={iconID[index]} src={d} alt="button" onClick={(e)=>{clickHandler(e)}} />
                </div>
            )}
        </div>
    );
}