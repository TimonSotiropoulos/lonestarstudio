// *******************************************************
// Form Component
// -------------------------------------------------------
// This is a simple form wrapper component so that
// you can hit enter to submit the form
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class Form extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        this.props.submit();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.props.children}
                <button style={{display: "none"}} type="submit"></button>
            </form>
        );
    }
}

Form.defaultProps = {
    // Input Functionality Props
    submit: () => {console.log("OH NO! Your form didn't get a submit function...");},
}

export default Form;
// --------------------------------
