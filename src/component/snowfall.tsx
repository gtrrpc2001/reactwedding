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
        }, 700);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

      if (snowflakes.length > 200) {
        while(true){
          console.log('while 문 ' + snowflakes.length)
          snowflakes.shift();
          if (snowflakes.length < 50)
              break;
        }
      }
      console.log(snowflakes.length)
    return(
            <div className="snowfall">
                {snowflakes}
            </div>
    );
}
export default Snowfall;