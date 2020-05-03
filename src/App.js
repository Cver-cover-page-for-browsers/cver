import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function useInput({ type, defaults }) {
  const [value, setValue] = useState(defaults);
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} autofocus />;
  return [value, input];
}

const Themes = ({setTheme}) => {
  const themeList = [
    'spaceGrey',
    'shiny',
    'coral'
  ]

  return <ul> {themeList.map(t => {
    const _setTheme = () => setTheme(t)
    return <li onClick={_setTheme}>{t}</li>
  }
  )} </ul>
}

function App() {
  const [_, userInput] = useInput({ type: "text", defaults: "Your cover here" });
  const [ theme, setTheme ] = useState('spaceGrey');
  
  return (
    <div className={theme} >
      {userInput}
      < Themes setTheme={setTheme}/>
    </div>
  );
}

export default App;
