import React, {useContext} from "react";
import { ThemeContext } from "./App";

export default(props) =>{
    const context = useContext(ThemeContext);

    return(
        <div style={
            {
                backgroundColor:context.backgroundColor,
                color:context.color
            }}>
            <p>
                Hola estudiantes
            </p>
        
        </div>
    )
}