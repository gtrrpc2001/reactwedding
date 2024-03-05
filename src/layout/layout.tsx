import { Link, Outlet } from "react-router-dom";
import  Snowfall  from "../component/snowfall";
import { Gallery } from "../gallery/gallery";
import { Box } from '@mui/material'
import image1 from '../asset/images/1.jpg'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Main } from "../main/main";

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
            <Box sx={{display:'flex',justifyContent:'center'}} >  
                <Gallery width={width/2} height={height/3} borderRadius={15}/>  

>>>>>>> 6a82bc40b0e849d9c059e15c7aa32e989e02f0e6
            </Box>
            <Main width={width} height={height*0.5}/>
            <Footer/>
        </Box>
    );
}