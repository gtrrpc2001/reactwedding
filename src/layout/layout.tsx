import { Box } from '@mui/material'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Welcome } from "../welcome/welcome";
import { iconClick } from "../model/icons";
import { Gallery } from "../gallery/gallery";
import {Map} from "../map/map"
import { CongratulationGift } from '../congratulationGift/congratulationGift';

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
                    <Gallery width={width} height={height} borderRadius={15}/>
                );
            case iconClickList.location :
                return(
                    <>
                      <Map width={width} height={height}/>
                    </>
                );
            case iconClickList.payment:
                return(
                    <>
                        <CongratulationGift width={width} height={height}/>
                    </>
                );
            default :
                return(                    
                    <Welcome width={width} height={height}/>                                                       
                );
        }
    }
    
    return (
        <Box sx={{width:width,height:height}}>
            <Box sx={{display:'flex',justifyContent:'center'}} >
                {pages()}
            </Box>            
            <div style={{width:width,height:height*0.05}}/>            
            <Footer clickHandler={footerBtnHandler}/>
        </Box>
    );
}