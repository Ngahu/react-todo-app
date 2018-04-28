import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoCreate extends Component {
    constructor(props) {
        super(props);
        
    this.state = {
        inputValue:""
    }

    }

    handleChange = (evt) =>{
        console.log(evt.target.value)
        this.setState({inputValue:evt.target.value})

    }



    render() {
        return (
            <div>
                <input 
                onChange={(evt) => this.handleChange(evt)}
                type="text"
                 value={this.state.inputValue}
                 
                 />

            </div>
        );
    }
}

