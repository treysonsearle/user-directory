
import './App.css';

import { Component } from 'react';
import Header from './Header'
import Slide from './Slide'

import data from './data';


class App extends Component{
    render(){
  return (
    <div className="App">
      <Header />
      <Slide />
 
    </div>
  );
    }
}

export default App;
