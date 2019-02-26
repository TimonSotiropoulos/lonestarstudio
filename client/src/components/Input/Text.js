// *******************************************************
// Form Input Component
// -------------------------------------------------------
// This is the main form Input component for entering
// information into text fields. Managing the internal state
// of these components (eg what is held inside the text field)
// should be managed outside this component
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as C from '../index.js';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: props.value || "",
            isValid: null
        }
    }

    _updateInput = (event) => {
        const { inputKey, updateInput } = this.props;
        const value = event.target.value;
        if (updateInput) {
            updateInput(inputKey, value);
        }
        this.setState({
            value: value
        })
    }

    _updateValidation = () => {
        const { inputKey, validator, updateValidation } = this.props;
        if (validator) {
            const isValid = validator.isValid(this.state.value);
            this.setState({
                isValid: isValid
            });
            if (updateValidation) {
                updateValidation(inputKey, isValid);
            }
        }
    }

    _onChange = (event) => {
        this._updateInput(event);
    }

    _onFocus = (event) => {
        this.setState({focus: true});
    }

    _onBlur = (event) => {
        this.setState({focus: false});
        this._updateValidation();
    }

    _getBorderColour = () => {
        if (this.state.focus) {
            return S.Border.Colour_black;
        }
        switch (this.state.isValid) {
            case true:
                return S.Border.Colour_successGreen;
            case false:
                return S.Border.Colour_errorRed;
            default:
                return S.Border.Colour_grey;
        }
    }

    render() {

        const { inputKey, type, label, placeholder } = this.props;
        const { changePlaceHolderColor, fontSize, fontColor, borderRight, borderLeft, borderBottom, borderTop, backgroundColor, containerStyle, style, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, width, height } = this.props;
        const borderColour = this._getBorderColour();

        return (
            <div className={[marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, width, S.Layout.pointer].join(" ")} style={containerStyle}>
                {(label) ? <label htmlFor={inputKey} style={{cursor: 'pointer'}}><C.Text.Heading5 marginBottom={S.Margin.Bottom_20}>{label}</C.Text.Heading5></label> : null}
                <input
                    name="phoneNumberFooterContact"
                    id={inputKey}
                    value={this.state.value}
                    className={[
                        S.Fonts.BrandonGrotesque_regular,
                        //S.Fonts.Size_19,
                        fontSize,
                        //S.Fonts.Colour_black,
                        fontColor,
                        S.Width._100,
                        //S.Border.Width_1,
                        borderBottom,
                        borderTop,
                        borderLeft,
                        borderRight,
                        borderColour,
                        S.Padding.Top_20,
                        S.Padding.Bottom_20,
                        S.Padding.Left_20,
                        S.Padding.Right_20,
                        backgroundColor,
                        changePlaceHolderColor
                    ].join(" ")}
                    style={{outline: 'none', cursor: 'pointer', height: height, ...style}}
                    placeholder={placeholder}
                    onChange={this._updateInput}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    type={type} />
            </div>
        );
    }
}

Text.defaultProps = {
    // Input Functionality Props
    type: 'text',
    label: null,
    value: "",
    placeholder: null,
    inputKey: undefined,
    updateValidation: undefined,
    updateInput: undefined,
    validator: undefined,

    // Styles Props
    containerStyle: {},
    style: {},
    marginTop: S.Margin.Top_20,
    marginBottom: S.Margin.Bottom_20,
    marginLeft: null,
    marginRight: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    width: S.Width._100,
    height: 60,
    backgroundColor: S.Background.white,
    borderBottom: S.Border.Width_Bottom_1,
    borderTop: S.Border.Width_Top_1,
    borderLeft: S.Border.Width_Left_1,
    borderRight: S.Border.Width_Right_1,
    fontSize: S.Fonts.Size_19,
    fontColor: S.Fonts.Colour_black,
    changePlaceHolderColor: null
}

export default Text;
// --------------------------------
