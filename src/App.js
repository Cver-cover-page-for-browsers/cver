import React, { useState } from 'react';
import './App.css';

function useInput({ type, defaults }) {
  const [value, setValue] = useState(defaults);
  const input = <input value={value} onChange={e => {
    document.title = `Cver - ${e.target.value}`
    setValue(e.target.value)
  }} type={type} autoFocus />;
  return [value, input];
}

const Themes = ({setTheme}) => {
  const themeList = {
    'Space Grey': 'spaceGrey',
    'Shiny': 'shiny',
    'Coral': 'coral'
  }


  return <ul> {Object.keys(themeList).map(t => {
    const _setTheme = () => setTheme(themeList[t])
    return <li onClick={_setTheme}>{t}</li>
  }
  )} </ul>
}

function App() {
  const [ cverText, cverTextInput] = useInput({ type: "text", defaults: "Your cover here" });
  const [ theme, setTheme ] = useState('spaceGrey');

  console.log(document.body.style)
  
  return (
    <div className={theme} >
      <div className='input'>
        {cverTextInput}
      </div>
      <div className='themes'>
        Select theme:
        <Themes setTheme={setTheme}/>
      </div>
      <div className='footer'>
        <p>Why?</p>
        <p>Made with ❤️ by <a href='https://www.vernizzis.it/'>Dave</a></p>
      </div>
    </div>
  );
}

export default App;
