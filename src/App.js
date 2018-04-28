import React, { Component } from 'react';

import './App.css';

import { Header } from './components/Header';

import { TodoCreate } from './components/TodoCreate';

import { TodoList } from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
      

      <Header/>
      <TodoCreate/>
      <TodoList/>
      </div>
    );
  }
}

export default App;
