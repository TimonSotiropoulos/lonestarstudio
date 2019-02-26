// *******************************************************
// SplitScreen
// -------------------------------------------------------
// This is the main layout component for rendering the large
// grey background with the space for adding form inputs
// to the right hand side as used in the Login/Account creation
// screens.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as C from '../';
import * as S from '../../styles';
import * as CONSTANTS from '../../constants';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class SplitScreen extends Component {

    renderMobile = () => {
        return (
            <div className={[S.Layout.flexRow, S.Width._100].join(" ")} style={{minHeight: '100vh'}}>
                <div className={[S.Background.black, S.Width._50].join(" ")} style={{minHeight: '100vh'}}>
                    {(this.props.renderLeftComponent) ? this.props.renderLeftComponent() : null}
                    {(this.props.leftBackgroundImage) ? <C.Image image={this.props.leftBackgroundImage} cover={'cover'} backgroundPosition={'left'} minWidth={'100%'} height={'100vh'} /> : null}
                </div>
                <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Background.white, S.Padding._20, S.Width._50].join(" ")} style={{minHeight: '100vh'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    renderDesktop = () => {
        return (
            <div style={{position: 'relative'}}>
                <div className={[S.Layout.flexRow, S.Width._100].join(" ")} style={{minHeight: '100vh'}}>
                <div className={[S.Background.black, S.Width._50].join(" ")} style={{minHeight: '100vh'}}>
                    {(this.props.renderLeftComponent) ? this.props.renderLeftComponent() : null}
                    {(this.props.leftBackgroundImage) ? <C.Image image={this.props.leftBackgroundImage} cover={'cover'} backgroundPosition={'left'} minWidth={'100%'} height={'100vh'} /> : null}
                </div>
                <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Background.white, S.Width._50].join(" ")} style={{minHeight: '100vh'}}>
                    {this.props.children}
                </div>
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

SplitScreen.defaultProps = {
    renderLeftComponent: null
}

export default SplitScreen;
// --------------------------------
