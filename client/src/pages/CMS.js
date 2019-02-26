// *******************************************************
// CMS Main
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
// Implementation
// -------------------------------------------
class CMS extends Component {

    render() {
        return (
            <C.Structure.Sidebar />
        );
    }
}

export default withRouter(CMS);
// --------------------------------
