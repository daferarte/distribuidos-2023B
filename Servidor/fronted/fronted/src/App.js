import React, {useState} from 'react';
import Button from './Button';
import Card from './Card';

const theme ={
  'dark':{
    backgroundColor:'black',
    color:'white'
  },
  'light':{
    backgroundColor:'white',
    color:'black'
  }
}

export const ThemeContext = React.createContext();


function App() {

  const [tema, setTheme] = useState(theme.dark);
  return (
    <div>
      <ThemeContext.Provider value={tema}>
        <Button/>
        <Card />
        <button onClick={()=>setTheme(theme.light)}>Modo claro</button>
        <button onClick={()=>setTheme(theme.dark)}>Modo oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
