import { useEffect, useState } from 'react';
import './snowfall.css'

export interface SnowfallProps{
    color:string | undefined,
    snowflakeCount:number | undefined
}

const Snowfall:React.FC = () => {    
    const [snowflakes, setSnowflakes] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        const interval = setInterval(() => {
          const newSnowflake = <div key={Math.random()} className="snowflake" style={{left: Math.random() * window.innerWidth, animationDuration: `${Math.random() * 3 + 2}s`}} />;
          setSnowflakes((snowflakes) => [...snowflakes, newSnowflake]);
    
          if (snowflakes.length > 200) {
            snowflakes.shift();
          }
        }, 100);
    
        return () => {
          clearInterval(interval);
        };
      }, [snowflakes]);

    return(
            <div className="snowfall">
                {snowflakes}
            </div>
    );
}
export default Snowfall;