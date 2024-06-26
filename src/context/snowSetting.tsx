
import { FC, PropsWithChildren, createContext, useState } from "react";
import { SnowfallProps } from "../component/snowfall";

export interface SnowfallSettings extends SnowfallProps{
    setColor: (color:string) => void
    setSnowflakeCount: (count:number) => void    
}

export const SettingsContext = createContext<Partial<SnowfallSettings>>({})

export const StateProvider:FC = ({children}:PropsWithChildren) => {
    const [color, setColor] = useState('#dee4fd')
    const [snowflakeCount, setSnowflakeCount] = useState(200)

    return (
        <SettingsContext.Provider value={{color,setColor,snowflakeCount,setSnowflakeCount}}>    
        </SettingsContext.Provider>
    );
}