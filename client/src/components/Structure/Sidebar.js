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
class Sidebar extends Component {

    renderDesktop = () => {
        return (
            <div style={{position: 'relative'}}>
                <div className={[S.Layout.flexRow, S.Width._100].join(" ")} style={{minHeight: '100vh'}}>
                <div className={[S.Background.red].join(" ")} style={{width: this.props.sidebarWidth, minHeight: '100vh'}}>
                </div>
                <div className={[S.Layout.flexCol, S.Layout.bothAxisCenter, S.Background.white, S.Width._100].join(" ")} style={{minHeight: '100vh'}}>
                    {this.props.children}
                </div>
            </div>
            </div>

        );
    }

    render() {
        return (
            <C.Utility.Responsive
                renderMobile={this.renderDesktop}
                renderDesktop={this.renderDesktop} />
        );
    }
}

Sidebar.defaultProps = {
    sidebarWidth: 300
}

export default Sidebar;
// --------------------------------
