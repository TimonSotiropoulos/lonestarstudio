// *******************************************************
// Button
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React from 'react';
import * as CONSTANTS from '../../constants';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
const Button = ({
    renderKey,
    selected,
    children,
    type = null,
    width = S.Width._100,
    buttonStatus = null,
    marginTop = null,
    marginBottom = null,
    marginLeft = null,
    marginRight = null,
    paddingTop = S.Padding.Top_20,
    paddingBottom = S.Padding.Bottom_15,
    paddingLeft = S.Padding.Left_35,
    paddingRight = S.Padding.Right_35,
    disabled = false,
    fontStyle = S.Fonts.Bebas,
    fontSize = S.Fonts.Size_20,
    lineHeight = S.Fonts.LineHeight_30,
    letterSpacing = S.Fonts.LetterSpacing_2,
    textAlign = S.Layout.textCenter,
    borderRadius = null,
    onClick = () => {console.log("Default button onClick...");},
    textTransform = true,
    height = null
}) => {

    // Default View for Buttons
    const { backgroundColour, borderColour, fontColour } = getStyles(type);
    let style = {cursor: (disabled) ? "none" : "pointer", textTransform: (textTransform) ? "uppercase" : "none"};
    if (height){
        style = {...style, height: height}
    }
    return (
        <div className={[
            width,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            fontStyle,
            fontSize,
            lineHeight,
            letterSpacing,
            textAlign,
            borderRadius,
            overrideButtonColour(buttonStatus, disabled, backgroundColour),
            borderColour,
            fontColour,
            S.Layout.flexRow, S.Layout.bothAxisCenter,
        ].join(" ")} onClick={(disabled || buttonStatus === CONSTANTS.STATES.LOADING) ? null : onClick} style={style}>{children}</div>
    );
}

const getStyles = (type) => {
    switch (type) {
        case 'transparent':
            return {
                fontColour: S.Fonts.Colour_white,
            };
        case 'white':
            return {
                backgroundColour: S.Background.white_Hover,
                borderColour: S.Border.white,
                fontColour: S.Fonts.Colour_black,
            };
        case 'grey':
            return {
                backgroundColour: S.Background.paleGrey_Hover,
                borderColour: S.Border.paleGrey,
                fontColour: S.Fonts.Colour_black,
            };
        default:
            return {
                backgroundColour: S.Background.duskBlue_Hover,
                borderColour: S.Border.duskBlue_Hover,
                fontColour: S.Fonts.Colour_white,
            };
    }
}

const overrideButtonColour = (buttonStatus, disabled, backgroundColour) => {
    if (buttonStatus === CONSTANTS.STATES.SUCCESS) {
        return S.Background.successGreen;
    }
    if (disabled) {
        return S.Background.grey;
    }
    return backgroundColour;
}

export default Button;
// --------------------------------
