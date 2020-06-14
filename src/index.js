import React from 'react';
import ReactDOM from 'react-dom';


//const color = Math.random() > 0.5 ? 'green':'red';style={{ color }} <br></br>Hello React Heres a random number {Math.random()} 

//import Header from './components/Header'
import App from './components/App';


/* App.propTypes = {
    headerMessage: React.PropTypes.string
  }; */
/* Header.propTypes = {
    message: React.PropTypes.string
}; */



ReactDOM.render(

    <App />,
  document.getElementById('root')
);
//can put javascript in directly using {} the math.random function is JS
//Use className instead of class for bootstrap stuff 