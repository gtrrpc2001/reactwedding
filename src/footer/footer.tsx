import { iconList } from "../model/icons";
import './footer.css'

export const Footer = () => {
    return (
        <div className="footer" style={{display:'flex', justifyContent:'center'}}>
            {iconList.map((d,index) => 
                <div className="footerBtn" style={{marginLeft: index === 0 ? 0 : 30}}>
                    <img src={d} alt="button"/>
                </div>
            )}
        </div>
    );
}