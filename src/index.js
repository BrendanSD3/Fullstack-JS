import React from 'react';
import ReactDOM from 'react-dom';


//const color = Math.random() > 0.5 ? 'green':'red';style={{ color }} <br></br>Hello React Heres a random number {Math.random()} 

//import Header from './components/Header'
import App from './components/App';
//import data from './testData';

/* App.propTypes = {
    headerMessage: React.PropTypes.string
  }; */
/* Header.propTypes = {
    message: React.PropTypes.string
}; */



ReactDOM.render(

    <App initialContests={[]}/>,
  document.getElementById('root')
);
/* setTimeout(()=>{
    ReactDOM.render(
        <h2>.....</h2>,
        document.getElementById('root')
        
    );
},4000); */



//can put javascript in directly using {} the math.random function is JS
//Use className instead of class for bootstrap stuff 