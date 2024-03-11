import React from 'react';
import { googleKey } from '../model/mapkey';
import { address, detail, locationName } from '../model/address';

type props = {
    width:number
    height:number
}

export const Map = ({width,height}:props) => {   
      
      return (              
        <div style={{ marginTop: '20px' ,width:width*0.8,height:height*0.9,textAlign:'center'}}>
                <h2 style={{ color: 'rgb(41,82,56)', fontWeight: 'bold', fontSize: '20px' }}>오시는 길</h2>
                <div style={{marginTop: '20px', width:width*0.8,height:height*0.7,textAlign:'center'}}>                
                    <iframe
                    title='map'
                    width={"100%"}
                    height={"100%"}
                    src={`https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=${locationName}`}
                    />
                </div>                                          
            <p style={{margin: '20px', textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                <span>{address}</span>
                <br/>
                <span>{detail}</span>
            </p>
        </div>
        
      );
}
