// *******************************************************
// Home page
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions';
import * as S from '../styles';
import * as C from '../components';
import * as CONSTANTS from '../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Login extends Component {

    login = () => {
        const body = {
            username: this.props[CONSTANTS.INPUTS.LOGIN.EMAIL.KEY],
            password: this.props[CONSTANTS.INPUTS.LOGIN.PASSWORD.KEY],
        }
        this.props.login(body);
    }

    render() {
        return (
            <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter].join(" ")}>
                <C.Text.Heading1>Login</C.Text.Heading1>
                <C.Input.Form submit={this.login}>
                    <C.Input.Text
                        label={'Email'}
                        placeholder={'example@email.com'}
                        inputKey={CONSTANTS.INPUTS.LOGIN.EMAIL.KEY}
                        validator={CONSTANTS.INPUTS.LOGIN.EMAIL.VALIDATOR}
                        updateInput={this.props.updateInput}
                        updateValidation={this.props.updateValidation}
                        value={this.props[CONSTANTS.INPUTS.LOGIN.EMAIL.KEY]}
                        marginBottom={S.Margin.Bottom_30}
                    />
                    <C.Input.Text
                        label={'Password'}
                        type={'password'}
                        placeholder={'********'}
                        inputKey={CONSTANTS.INPUTS.LOGIN.PASSWORD.KEY}
                        validator={CONSTANTS.INPUTS.LOGIN.PASSWORD.VALIDATOR}
                        updateInput={this.props.updateInput}
                        updateValidation={this.props.updateValidation}
                        value={this.props[CONSTANTS.INPUTS.LOGIN.PASSWORD.KEY]}
                        marginBottom={S.Margin.Bottom_30}
                    />
                </C.Input.Form>
                <C.Button onClick={this.login}>Submit</C.Button>
            </div>
        );
    }
}

// *******************************************
// Redux Connection
// -------------------------------------------
const mapStateToProps = (state) => {
    return {
        error: state.error,
        loading: state.loading,
        success: state.success
    };
}

export default connect(mapStateToProps, {
    login: ACTIONS.AUTH.login
})(C.HOC.withInputs({
    WrappedComponent: Login,
    InputKeys: [
        CONSTANTS.INPUTS.LOGIN.EMAIL,
        CONSTANTS.INPUTS.LOGIN.PASSWORD
    ]
}));
// --------------------------------
