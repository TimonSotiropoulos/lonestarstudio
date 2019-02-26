// *******************************************************
// Splash Screen
// -------------------------------------------------------
// This is the Splash Screen
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
class Splash extends Component {

    renderMobile = () => {
        return (
            <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Width._100, S.Background.white].join(" ")} style={{height: '100vh'}}>
                <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Margin.Bottom_20].join(" ")} style={{minWidth: 350}}>
                    <C.Icon icon={'dark-logo'}/>
                </div>
            </div>
        );
    }

    renderDesktop = () => {
        return (
            <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Width._100, S.Background.white].join(" ")} style={{height: '100vh'}}>
                <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Margin.Bottom_50].join(" ")} style={{minWidth: 600}}>
                    <C.Icon icon={'dark-logo'} />
                </div>
            </div>
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

export default Splash;
// --------------------------------
