// *******************************************************
// Paragraph
// -------------------------------------------------------
// This is the Paragraph Text Component for the application
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
class Paragraph extends Component {

    renderMobile = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.PARAGRAPH.MOBILE.type;
        const styleSize = size || DEFAULT_STYLES.PARAGRAPH.MOBILE.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.PARAGRAPH.MOBILE.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.PARAGRAPH.MOBILE.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.PARAGRAPH.MOBILE.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }

    renderTablet = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.PARAGRAPH.TABLET.type;
        const styleSize = size || DEFAULT_STYLES.PARAGRAPH.TABLET.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.PARAGRAPH.TABLET.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.PARAGRAPH.TABLET.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.PARAGRAPH.TABLET.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
                {this.props.children}
            </div>
        );
    }

    renderDesktop = () => {
        const { style, type, size, lineHeight, letterSpacing, colour, textAlign,  marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.PARAGRAPH.DESKTOP.type;
        const styleSize = size || DEFAULT_STYLES.PARAGRAPH.DESKTOP.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.PARAGRAPH.DESKTOP.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.PARAGRAPH.DESKTOP.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.PARAGRAPH.DESKTOP.colour;
        return (
            <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, textAlign, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={style}>
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

Paragraph.defaultProps = {
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
    paddingRight: null,
    textAlign: null,
}

export default Paragraph;
// --------------------------------
