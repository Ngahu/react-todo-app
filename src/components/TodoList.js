import React, { Component } from 'react';

import { Task } from './Task';

export class TodoList extends Component {
    constructor(props) {
        super(props);
    

    }


    render() {
        return (
            <div>
                {this.props.todos.map( (todo, index) => {
                    return(
                        <Task key={index} todo={todo}/>
                    )
                })}
                
            </div>
        );
    }
}
