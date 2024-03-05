import { Link, Outlet } from "react-router-dom";
import  Snowfall  from "../component/snowfall";
import { Gallery } from "../gallery/gallery";
import { Box } from '@mui/material'
import image1 from '../asset/images/1.jpg'
import { useEffect, useState } from "react";

export const Layout = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

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
    
    return (
<<<<<<< HEAD
        <Box sx={{width:width,height:height}}>            
            <Box sx={{display:'flex',justifyContent:'center'}} >                
                <Gallery width={width/2} height={height/3} borderRadius={15}/>                
=======
        <Box sx={{width:width,height:height}}>
            <Snowfall />
            <Box sx={{display:'flex',justifyContent:'center'}} >
                <Box sx={{width:width/2,height:height/2,border:5,bgcolor:'background.paper'}}>
                <img src={image1} style={{width:`${width/2}px`,height:`${height/3}px`}}/>
                    {/* <Gallery/> */}
                </Box>
>>>>>>> 5dd7e90aca0d5955f3947afab5b31070e3103d47
            </Box>
            {/* <header style={{ height: 800, width: 1000 }}>                
                
            </header> */}
        </Box>
    );
}
