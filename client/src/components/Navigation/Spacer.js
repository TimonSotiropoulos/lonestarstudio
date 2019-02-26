// *******************************************************
// Spacer - Navigation
// -------------------------------------------------------
// This is a spacer componetn for the Navigation Bars
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as C from '../index.js';
import * as CONSTANTS from '../../constants';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class Spacer extends Component {

    renderMobile = () => {
        const backgroundColor = (this.props.debug) ? S.Background.red : null;
        return (
            <div className={[backgroundColor, S.Width._100].join(" ")} style={{height: CONSTANTS.SIZES.NAVIGATION_BAR_MOBILE_HEIGHT}} />
        );
    }

    renderDesktop = () => {
        const backgroundColor = (this.props.debug) ? S.Background.red : null;
        return (
            <div className={[backgroundColor, S.Width._100].join(" ")} style={{height: CONSTANTS.SIZES.NAVIGATION_BAR_DESKTOP_HEIGHT}} />
        );
    }

    render() {
        return (
            <C.Utility.Responsive
                renderMobile={this.renderMobile}
                renderDesktop={this.renderDesktop} />
        );
    }
}

Spacer.defaultProps = {
    debug: false
}

export default Spacer;
// --------------------------------
