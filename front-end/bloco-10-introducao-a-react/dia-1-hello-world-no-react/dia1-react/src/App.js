import React from 'react';
import './App.css';

const Task = (value) => {
return (
<li>{value}</li>
);
}

const compromissos = ['acordar', 'comer', 'codar', 'dormir'];

function App () {
return compromissos.map((compromisso) => Task(compromisso)) 

 }
 

export default App;






