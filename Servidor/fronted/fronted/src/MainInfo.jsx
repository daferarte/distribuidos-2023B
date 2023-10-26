import React, {useContext} from "react";
import { FormContext } from "./Form";

export default (props) => {
    const ctx = useContext(FormContext);
    return(
        <div>
            <input type="email" value={ctx.email} onChange={(ev)=>ctx.setEmail(ev.target.value)}/>
            <input type="password" value={ctx.passwprd} onChange={(ev)=>ctx.setPassword(ev.target.value)}/>
        </div>
    )
}