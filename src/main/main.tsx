import { Gallery } from "../gallery/gallery";

type props={
    width:number
    height:number
}

export const Main = ({width,height}:props) => {
    return (
        <main style={{width:width,height:height}}>  
        </main>
    );
}
