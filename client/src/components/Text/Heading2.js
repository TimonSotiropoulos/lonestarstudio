// *******************************************************
// Heading2
// -------------------------------------------------------
// This is the H2 Component for the application
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as C from '../index.js';
import * as DEFAULT_STYLES from './_default';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class Heading2 extends Component {

    renderMobile = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.HEADING2.MOBILE.type;
        const styleSize = size || DEFAULT_STYLES.HEADING2.MOBILE.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.HEADING2.MOBILE.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.HEADING2.MOBILE.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.HEADING2.MOBILE.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }

    renderTablet = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.HEADING2.TABLET.type;
        const styleSize = size || DEFAULT_STYLES.HEADING2.TABLET.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.HEADING2.TABLET.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.HEADING2.TABLET.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.HEADING2.TABLET.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }

    renderDesktop = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.HEADING2.DESKTOP.type;
        const styleSize = size || DEFAULT_STYLES.HEADING2.DESKTOP.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.HEADING2.DESKTOP.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.HEADING2.DESKTOP.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.HEADING2.DESKTOP.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }

    render() {
        return (
            <C.Utility.Responsive
                renderMobile={this.renderMobile}
                renderTablet={this.renderTablet}
                renderDesktop={this.renderDesktop} />
        );
    }
}

Heading2.defaultProps = {
    style: {},
    type: null,
    size: null,
    lineHeight: null,
    letterSpacing: null,
    colour: null,
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null
}

export default Heading2;
// --------------------------------
