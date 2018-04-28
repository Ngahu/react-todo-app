import React, { Component } from 'react';


export class Task extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                
                <span style={{ textDecoration:this.props.todo.done ?'line-through':
                'none'    
            }}>
                {this.props.todo.value}
                </span>
                <button> Click </button>
            </div>
        );
    }
}

