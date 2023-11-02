import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logOut, signIn } from '../store/user';

let SignIn = (props) => {
    let dispatch = useDispatch();
    let user = useSelector(state => state.user.user);
    console.log(user);

    let doSignIn = () =>{
        dispatch(
            signIn({
                email: 'daferarte@gmail.com',
                jwtToken: 'sdasudh3hwu43hr8rwfa7hf4'
            })
        )
    }

    let doLogOut = () =>{
        dispatch(
            logOut()
        )
    }

    return(
        <>
            { 
                user ? 
                    <button onClick={doLogOut}>Cerrar sesion</button>
                :
                    <button onClick={doSignIn}>Iniciar sesion</button>
            }
        </>
    )
}

export default SignIn;