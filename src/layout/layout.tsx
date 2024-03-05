import { useContext } from "react";

import { SettingsContext } from "../context/snowSetting";
import  Snowfall  from "../component/snowfall";

export const Layout = () => {
    const settings = useContext(SettingsContext)
    return (
        <div style={{background: '#282c34'}}>
        <Snowfall />
        <header style={{ height: 800, width: 1000, position: 'relative' }}>
            <div>

            </div>
        </header>
        </div>
    );
}