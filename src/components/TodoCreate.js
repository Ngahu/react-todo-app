import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoCreate extends Component {
    constructor(props) {
        super(props);
        

    }

    



    render() {
        return (
            <div>
                <input 
                onChange={(evt) => this.props.handleChange(evt)}
                type="text"
                 value={this.props.inputValue}
                 
                 />

            </div>
        );
    }
}

