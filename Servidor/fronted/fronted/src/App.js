import React, {useEffect, useRef, useState} from 'react';

const Form = ()=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");

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
        <input type='text' id='title' value={title} onChange={(evt)=>setTitle(evt.target.value)}></input>
      </div>
      <div>
        <label htmlFor='body'> Publicación </label>
        <textarea id='body' value={body} onChange={(evt)=>setBody(evt.target.value)}></textarea>
      </div>
      <input type='submit' value="enviar" />
    </form>
  )
}

const Saludo = () => {
  const [name,setName]=useState("");
  return(
    <div>
      <input type='text' onChange={(ev)=>setName(ev.target.value)}></input>
      <p>hola {name}</p>
    </div>
  )
}

const Button = () =>{

  const[count, actCount] = useState(0); //hook

  useEffect(()=>{
    console.log("me ejecuto")

    return ()=>{
      console.log("adios");
    }
  },[]);
  return(
    <div>
      <p>precionado: {count}</p>
      <button onClick={()=>actCount(count+1)}>Clic me!</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>
        <Form/>
      </h1>
    </div>
  );
}

export default App;
