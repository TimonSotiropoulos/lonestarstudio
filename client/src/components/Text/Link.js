// *******************************************************
// Link
// -------------------------------------------------------
// This is the Link Text Component for the application
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as C from '../index.js';
import * as DEFAULT_STYLES from './_default';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class Link_ extends Component {

    renderMobile = () => {
        const { textDecoration, style, type, href, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.LINK.MOBILE.type;
        const styleSize = size || DEFAULT_STYLES.LINK.MOBILE.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.LINK.MOBILE.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.LINK.MOBILE.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.LINK.MOBILE.colour;
        return (
            <Link to={href} style={{cursor: 'pointer', textDecoration: textDecoration}} onClick={this.props.onClick}>
                <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={{textDecoration: textDecoration, ...style}}>
                    {this.props.children}
                </div>
            </Link>
        );
    }

    renderTablet = () => {
        const { textDecoration, style, type, href, size, lineHeight, letterSpacing, colour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.LINK.TABLET.type;
        const styleSize = size || DEFAULT_STYLES.LINK.TABLET.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.LINK.TABLET.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.LINK.TABLET.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.LINK.TABLET.colour;
        return (
            <Link to={href} style={{cursor: 'pointer', textDecoration: textDecoration}}>
                <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={{textDecoration: textDecoration, ...style}}>
                    {this.props.children}
                </div>
            </Link>
        );
    }

    renderDesktop = () => {
        const { textDecoration, style, type, href, size, lineHeight, letterSpacing, colour, italic, bold, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight } = this.props;
        const styleType = type || DEFAULT_STYLES.LINK.DESKTOP.type;
        const styleSize = size || DEFAULT_STYLES.LINK.DESKTOP.size;
        const styleLineHeight = lineHeight || DEFAULT_STYLES.LINK.DESKTOP.lineHeight;
        const styleLetterSpacing = letterSpacing || DEFAULT_STYLES.LINK.DESKTOP.letterSpacing;
        const styleColour = colour || DEFAULT_STYLES.LINK.DESKTOP.colour;
        return (
            <Link to={href} style={{cursor: 'pointer', textDecoration: textDecoration}}>
                <div className={[styleType, styleSize, styleLineHeight, styleLetterSpacing, styleColour, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={{textDecoration: textDecoration, fontWeight: (bold) ? 'bold' : 'auto', fontStyle: (italic) ? 'italic' : 'auto', ...style}}>
                    {this.props.children}
                </div>
            </Link>
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

Link_.defaultProps = {
    style: {},
    type: null,
    href: null,
    size: null,
    lineHeight: null,
    letterSpacing: null,
    colour: null,
    italic: false,
    bold: false,
    marginTop: null,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    textDecoration: 'underline'
}

export default Link_;
// --------------------------------
