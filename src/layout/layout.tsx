import { Link, Outlet } from "react-router-dom";
import  Snowfall  from "../component/snowfall";
import { Gallery } from "../gallery/gallery";

export const Layout = () => {
<<<<<<< HEAD
    
=======
>>>>>>> 6e41060baed619c2b3cf405ae3cc051f80c15e8f
    return (
        <div style={{width:'100vm'}}>
            <Snowfall />
            <div style={{width:'50vm',height:'50vm'}}>
                <Gallery/>
            </div>
            {/* <header style={{ height: 800, width: 1000 }}>                
                
            </header> */}
        </div>
    );
}
