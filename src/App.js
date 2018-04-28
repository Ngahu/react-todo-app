import React, { Component } from 'react';

import './App.css';

import { Header } from './components/Header';

import { TodoCreate } from './components/TodoCreate';

import { TodoList } from './components/TodoList';

class App extends Component {

  state = {
    inputValue:"",
    todos:[
      {value:'clean the house',done:false,id:1},
      {value:'Create an app',done:true,id:2},
      {value:'buy nissan gtr',done:false,id:3}
    ]
  }


  handleChange = (evt) =>{
    console.log(evt.target.value)
    this.setState({inputValue:evt.target.value})
  }
  




  render() {
    return (
      <div className="App">
      

      <Header/>
      <TodoCreate 
      inputValue={this.state.inputValue}
      handleChange={this.handleChange}
      />

      <TodoList
      todos={this.state.todos}
      
      />
      </div>
    );
  }
}

export default App;
