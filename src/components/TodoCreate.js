import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoCreate extends Component {
    constructor(props) {
        super(props);
        

    }

    



    render() {
        return (
            <div>
               <form onSubmit={(evt) =>this.props.handleSubmit(evt)}>
               <input 
                onChange={(evt) => this.props.handleChange(evt)}
                type="text"
                 value={this.props.inputValue}
                 
                 />
               </form>

            </div>
        );
    }
}

