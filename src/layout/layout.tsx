import  Snowfall  from "../component/snowfall";
import { Box } from '@mui/material'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Welcome } from "../welcome/welcome";
import { iconClick } from "../model/icons";
import { Gallery } from "../gallery/gallery";

export const Layout = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [iconClickList,setIconClickList] = useState<iconClick>({invitation:true,album:false,location:false,payment:false})

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const footerBtnHandler = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        let clickList = iconClickList
        switch(e.currentTarget.id){
            case "album":
                clickList = {invitation:false,album:true,location:false,payment:false}
                break;
            case "location":
                clickList = {invitation:false,album:false,location:true,payment:false}
                break;
            case "payment":
                clickList = {invitation:false,album:false,location:false,payment:true}
                break;
            default:
                clickList = {invitation:true,album:false,location:false,payment:false}
                break;            
        }
        setIconClickList(clickList)
    }

    const pages = () => {
        switch(true){
            case iconClickList.album :
                return(
                    <Gallery width={width/2} height={height/3} borderRadius={15}/>
                );
            case iconClickList.location :
                return(
                    <div>
                        
                    </div>
                );
            case iconClickList.payment:
                return(
                    <div>

                    </div>
                );
            default :
                return(
                    <Box sx={{display:'flex',justifyContent:'center'}} >                
                        <Welcome width={width} height={height}/>                                   
                    </Box>
                );
        }
    }
    
    return (
        <Box sx={{width:width,height:height}}>            
            {pages()}
            <div style={{width:width,height:height*0.05}}/>            
            <Footer clickHandler={footerBtnHandler}/>
        </Box>
    );
}