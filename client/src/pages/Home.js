// *******************************************************
// Home page
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as S from '../styles';
// --------------------------------

// *******************************************
// Image Imports
// -------------------------------------------
import Logo from '../assets/images/logo.svg';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Home extends Component {

    render() {
        return (
            <div className={[S.Layout.textCenter].join(" ")}>
                <header className={[S.Width._100, S.Background.black, S.Padding.Top_20, S.Padding.Bottom_20].join(" ")}>
                    <img src={Logo} style={{width: 100, height: 100}} alt="logo" />
                    <h1 className={[S.Fonts.bold, S.Fonts.Colour_white, S.Fonts.Size_32].join(" ")}>Welcome to React Boiler</h1>
                </header>
                <p className={[S.Fonts.normal, S.Fonts.Colour_black, S.Fonts.Size_18].join(" ")}>
                    To get started, edit <code>src/pages/Home.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default withRouter(Home);
// --------------------------------
