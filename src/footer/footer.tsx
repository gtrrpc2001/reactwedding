import { iconList } from "../model/icons";

export const Footer = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            {iconList.map(d => 
                <div style={{marginLeft: 10}}>
                    <img src={d} alt="button"/>
                </div>
            )}
        </div>
    );
}