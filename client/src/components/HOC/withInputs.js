// *******************************************************
// withInputs Higher Order Component
// -------------------------------------------------------
// This file contains the abstracted logic that a container/page
// will need to have form inputs inside it's screen.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as U from '../../utilities';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
const withInputs = ({WrappedComponent, InputKeys}) => {

    class InputManager extends Component {

        constructor(props) {
            super(props);

            if (!WrappedComponent) {
                throw new Error(`No Wrapped Component was passed to the withInputs function. Please check your naming of your class when using the HoC.`)
            }

            if (!InputKeys) {
                const data = WrappedComponent.toString().split(" ");
                const ComponentName = data[1];
                throw new Error(`No Input Keys provided to withInputs function. Input keys are required to build this component. Please check export of component ${ComponentName}`);
            }

            let inputs = {};
            let validation = {};

            InputKeys.forEach((item) => {
                inputs[item.KEY] = null;
                let confirmKey;

                // Add confirm key if required
                if (item.CONFIRM_FIELD) {
                    confirmKey = U.VALIDATOR.createConfirmKey(item.KEY);
                    inputs[confirmKey] = null;
                }

                if (item.VALIDATOR) {
                    validation[item.KEY] = true;
                    if (item.CONFIRM_FIELD) {
                        validation[confirmKey] = true;
                    }
                }
            });

            this.INPUT_KEYS = InputKeys;

            this.state = {
                ...inputs,
                validation: validation,
                formValid: false
            }
        }

        updateInput = (inputKey, value, multiple = '') => {
            if (multiple==='multiple'){
                if (this.state[inputKey]==undefined){
                    let a = [];
                    a.push(value);
                    this.setState({
                        updated: true,
                        [inputKey]: a
                    });
                }else{
                    let a = this.state[inputKey];
                    let index = a.indexOf(value);
                    let b = [];
                    if (index !== -1){
                        for (var i = 0; i<a.length; i++){
                            if (a[i]!==value){
                                b.push(a[i]);
                            }
                        }
                        this.setState({
                            updated: true,
                            [inputKey]: b
                        });
                    }else{
                        a.push(value);
                        this.setState({
                            updated: true,
                            [inputKey]: a
                        });
                    }
                    
                }
                
            }else{
                this.setState({
                    updated: true,
                    [inputKey]: value
                });
            }
            
        }

        updateValidation = (inputKey, value) => {
            let validation = {
                ...this.state.validation
            };
            let isFormValid = true;
            Object.keys(validation).forEach((key) => {
                if (inputKey === key) {
                    validation[key] = value;
                }
                if (!validation[key]) {
                    isFormValid = false;
                }
            });

            this.setState({
                validation: {
                    ...this.state.validation,
                    [inputKey]: value
                },
                formValid: isFormValid
            });
        }

        validateForm = () => {
            let isFormValid = true;
            let nextValidation = {};
            Object.keys(this.state.validation).forEach((key) => {
                let validator;
                let confirmField = false;

                this.INPUT_KEYS.forEach((item) => {
                    if (item.KEY === key) {
                        validator = item.VALIDATOR;
                        confirmField = item.CONFIRM_FIELD;
                    }
                })
                if (!validator) {
                    return;
                }

                const isKeyValid = validator.isValid(this.state[key]);
                nextValidation[key] = isKeyValid;
                if (!isKeyValid) {
                    isFormValid = false;
                }

                if (confirmField) {
                    const confirmKey = U.VALIDATOR.createConfirmKey(key);
                    const isConfirmKeyValid = this.state[confirmKey] === this.state[key];
                    nextValidation[confirmKey] = isConfirmKeyValid;
                    if (!isConfirmKeyValid) {
                        isFormValid = false;
                    }
                }
            });
            this.setState({
                validation: {
                    ...nextValidation
                },
                formValid: isFormValid
            });
            return isFormValid;
        }

        render () {

            return (
                <WrappedComponent
                    updateInput={this.updateInput}
                    updateValidation={this.updateValidation}
                    validateForm={this.validateForm}
                    {...this.state}
                    {...this.props} />
            );
        }
    }

    return InputManager;
}

export default withInputs;
// --------------------------------
