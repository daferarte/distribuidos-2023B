import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import SignIn from './users/SingIn';

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

            <Route path="user" element={<NotImplemented/>}></Route>
              <Route path='user/register' element={<SignIn/>} />
              <Route path='delete/:id' element={<NotImplemented/>} />
              <Route path='update/:id' element={<NotImplemented/>} />
            

            <Route path="*" element={<Eror404/>} />
          </Routes>
        </Provider>        
      </BrowserRouter>
    </>
  );
}

export default App;
