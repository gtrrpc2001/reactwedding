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
        <Box sx={{width:width,height:height}}>
            <Snowfall />
            <Box sx={{display:'flex',justifyContent:'center'}} >
                <Box sx={{width:width/2,height:height/2,border:5,bgcolor:'background.paper'}}>
                <img src={image1}/>
                    {/* <Gallery/> */}
                </Box>
            </Box>
            {/* <header style={{ height: 800, width: 1000 }}>                
                
            </header> */}
        </Box>
    );
}
