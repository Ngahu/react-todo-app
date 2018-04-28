import React, { Component } from 'react';

import './App.css';

import { Header } from './components/Header';

import { TodoCreate } from './components/TodoCreate';

class App extends Component {
  render() {
    return (
      <div className="App">
      

      <Header/>
      <TodoCreate/>
      </div>
    );
  }
}

export default App;
