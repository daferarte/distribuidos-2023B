import React, {useContext, useState} from "react";
import MainInfo from "./MainInfo";
import Skills from "./Skills";

export const FormContext = React.createContext();

export default (props) => {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState("");

    return(
        <div>
            <form>
                <FormContext.Provider value={{email, password, likes, setEmail, setLikes, setPassword}}>
                    <MainInfo/>
                    <Skills/>
                </FormContext.Provider>
                <div>
                    <p>Email: {email}</p>
                    <p>password: {password}</p>
                    <p>lenguajes: {likes}</p>
                </div>
            </form>
        </div>
    )
}