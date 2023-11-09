import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn } from '../store/user';

let SignIn = (props) => {

    let dispatch = useDispatch();
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(
            signIn({
                credential:data
            })
        );
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="email" name="email" {...register("email")} placeholder='Correo electronico' />
                </div>
                <div>
                    <input type="password" name="password" {...register("password")} placeholder='Contraseña' />
                </div>
                <input type='submit' value='Enviar' />
            </form>
        </div>
    )
}

export default SignIn;