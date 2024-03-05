import { iconList } from "../model/icons";
import './footer.css'

export const Footer = () => {
    return (
        <div className="footer" style={{display:'flex', justifyContent:'center'}}>
            {iconList.map(d => 
                <div className="footerBtn" style={{marginLeft: 20}}>
                    <img src={d} alt="button"/>
                </div>
            )}
        </div>
    );
}