import React from 'react';
import desktop from './Desktop.png'; 

function About({theme}) {
  
  return (
      <div className={theme}>
        <h1>Cver</h1>

        <h2>A tool to setup cover for groups of tabs</h2>
        <h3>Just write the title, choose a theme, and reduce as icon</h3>

        <img src={desktop} alt="Logo" />
      </div>
  );
}

export default About;
