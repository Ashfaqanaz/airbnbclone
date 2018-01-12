import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryItems from './components/categoryItems/categoryItems'

let items = [
  {title:'Homes', image:'http://www.tedthomas.com/wp-content/uploads/2017/01/home1.png'},
  {title:'Mansions', image:'http://www.tedthomas.com/wp-content/uploads/2017/01/home1.png'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CategoryItems items={items}/>
      </div>
    );
  }
}

export default App;
