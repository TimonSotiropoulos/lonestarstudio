// *******************************************************
// Home page
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as C from '../components';
import * as S from '../styles';
// --------------------------------

// *******************************************
// Image Imports
// -------------------------------------------
import BACKGROUND from '../assets/images/bg_temp.jpg';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Home extends Component {

    render() {
        return (
            <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Layout.textCenter].join(" ")} style={{width: '100%', height: '100vh'}}>
                <C.Image image={BACKGROUND} absolute width={'100%'} height={'100vh'} cover={'cover'} />
                <div className={[S.Layout.absoluteTopLeft, S.Layout.flexCol, S.Layout.bothAxisCenter, S.Background.transparentBlack60].join(" ")} style={{width: '100%', height: '100vh'}}>
                    <C.Text.Heading1>Website under construction</C.Text.Heading1>
                    <C.Text.Heading5 marginTop={S.Margin.Top_20}>Contact me at <a href="mailto:timon@lonestarstudio.co" target="_blank" className={[S.Fonts.normal, S.Fonts.Size_21, S.Fonts.Colour_link_Hover].join(" ")} style={{textDecoration: 'none'}}>timon@lonestarstudio.co</a></C.Text.Heading5>
                </div>

            </div>
        );
    }
}

export default withRouter(Home);
// --------------------------------
