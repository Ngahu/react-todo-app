import React, { Component } from 'react';

import { Task } from './Task';

export class TodoList extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        todos:[
            {value:'clean the house',done:false,id:1},
            {value:'Create an app',done:true,id:2},
            {value:'buy nissan gtr',done:false,id:3}
        ]

    }

    }


    render() {
        return (
            <div>
                {this.state.todos.map( (todo, index) => {
                    return(
                        <Task key={index} todo={todo}/>
                    )
                })}
                
            </div>
        );
    }
}
