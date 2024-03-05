import { Gallery } from "../gallery/gallery";
import { Box } from '@mui/material'
import { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Main } from "../main/main";
import { Welcome } from "../welcome/welcome";

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
            <Box sx={{display:'flex',justifyContent:'center'}} >                
                <Welcome width={width} height={height}/>
                {/* <Gallery width={width/2} height={height/3} borderRadius={15}/>                 */}                
            </Box>
            <div style={{width:width,height:height*0.2}}>

            </div>

            {/* <Main width={width} height={height*0.5}/> */}
            <Footer/>
        </Box>
    );
}
