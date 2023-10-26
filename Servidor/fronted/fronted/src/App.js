import React, {useEffect, useRef, useState} from 'react';

const Form = ({showed})=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");

  const firsInput = useRef();

  useEffect(()=>{
    firsInput.current.focus();
  },[showed])

  const sendForm = (ev) =>{
    ev.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {response.json(); console.log(response) })
      .then((json) => {
        setTitle("");
        setBody("");
        console.log(json);
      });   
  }
  return(
    <form onSubmit={(ev)=>sendForm(ev)}>
      <div>
        <label htmlFor='title'> Titulo </label>
        <input type='text' id='title' value={title} onChange={(evt)=>setTitle(evt.target.value)} ref={firsInput}></input>
      </div>
      <div>
        <label htmlFor='body'> Publicación </label>
        <textarea id='body' value={body} onChange={(evt)=>setBody(evt.target.value)}></textarea>
      </div>
      <input type='submit' value="enviar" />
    </form>
  )
}

const Accordion = () =>{
  const [show, setShow]=useState(false);
  return(<div>
    <button onClick={()=>setShow(true)}>Mostrar form</button>
    {show && <Form showed={show} />}
  </div>)
}

function App() {
  return (
    <div>
      <h1>
        <Accordion/>
      </h1>
    </div>
  );
}

export default App;
