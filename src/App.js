import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './About';

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

function Main({theme, setTheme}) {
  const [ cverText, cverTextInput] = useInput({ type: "text", defaults: "Your cover here" });


  
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
        <p><Link to="/about">About</Link></p>
        <p>Made with ❤️ by <a href='https://www.vernizzis.it/'>Dave</a></p>
      </div>
    </div>
  );
}

function App() {
  const [ theme, setTheme ] = useState('spaceGrey');

  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/">
          <Main theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/about">
          <About theme={theme} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
