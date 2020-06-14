import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green':'red';
ReactDOM.render(
  <h2 className="text-center" style={{ color }}>
    Hello React with JSX!! {Math.random()} 
  </h2>,
  document.getElementById('root')
);
//can put javascript in directly using {} the math.random function is JS
//Use className instead of class for bootstrap stuff 