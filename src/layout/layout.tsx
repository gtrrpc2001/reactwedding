import { Link, Outlet } from "react-router-dom";
import  Snowfall  from "../component/snowfall";
import { Gallery } from "../gallery/gallery";
import { Box } from '@mui/material'
import image1 from '../asset/images/1.jpg'

export const Layout = () => {
    return (
        <Box sx={{width:'auto',height:'auto'}}>
            <Snowfall />
            <Box sx={{display:'flex',position:'absolute',left:700,top:200}} >
                <Box sx={{width:500,height:500,border:5,bgcolor:'background.paper'}}>
                <img src={image1}/>
                    {/* <Gallery/> */}
                </Box>
            </Box>
            {/* <header style={{ height: 800, width: 1000 }}>                
                
            </header> */}
        </Box>
    );
}
