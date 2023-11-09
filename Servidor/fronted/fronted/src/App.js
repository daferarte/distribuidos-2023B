import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import SignIn from './users/SingIn';
import { logOut } from './store/user';

let UsuariosOutlet=()=>{
  let user=useSelector(state=>state.user.user);

  let dispatch=useDispatch();
  let navigate=useNavigate();

  let doLogOut =()=>{
    dispatch(
      logOut()
    )
    navigate('/');
  };

  return(
    <>
      {
        user && <button onClick={doLogOut}>Cerrar Sesion</button>
      }
      <Outlet/>
    </>
  )

};

let NotImplemented = () => {
  return (
    <>
      <h1>Not Implemented</h1>
      <Link to="/">Ir al inicio</Link>
    </>
    
  );
};

let Eror404 = () => {
  return (
    <>
      <h1>Esta pagina no existe - 404</h1>
      <Link to="/">Ir al inicio</Link>
    </>
    
  );
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<NotImplemented/>} />
            <Route path="/login" element={<SignIn/>} />

            <Route path="user" element={<UsuariosOutlet/>}>
              <Route path='register' element={<SignIn/>} />
              <Route path='delete/:id' element={<NotImplemented/>} />
              <Route path='update/:id' element={<NotImplemented/>} />
            </Route>

            <Route path="*" element={<Eror404/>} />
          </Routes>
        </Provider>        
      </BrowserRouter>
    </>
  );
}

export default App;
