import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoCreate extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

 
    

    render() {
        return (
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button onClick={() => this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }
}

