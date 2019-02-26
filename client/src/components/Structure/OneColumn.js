// *******************************************************
// OneColumn
// -------------------------------------------------------
// This is the main layout component when wanting to add
// a simple one column layout. Takes a prop to add
// a header image if required.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import * as C from '../';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
class OneColumn extends Component {

    render() {
         const mainContentMinHeight = (this.props.headerImage) ? `calc(100vh - ${this.props.headerHeight}px)` : '100vh';
         return (
             <div className={[S.Layout.flexCol, S.Width._100].join(" ")} style={{minHeight: '100vh'}}>
                 {(this.props.headerImage) ?
                     <C.Image image={this.props.headerImage} cover={'cover'} width={'100%'} height={this.props.headerHeight}>
                        {(this.props.headerSubtext) ? <C.Text.Heading5 marginBottom={S.Margin.Bottom_10} colour={S.Fonts.Colour_white}>{this.props.headerSubtext}</C.Text.Heading5> : null}
                        {(this.props.headerText) ? <C.Text.Heading1 colour={S.Fonts.Colour_white} style={{textAlign: 'center'}}>{this.props.headerText}</C.Text.Heading1> : null}
                     </C.Image> : null}
                 <div className={[S.Layout.flexCol, S.Layout.mainAxisStart, S.Layout.altAxisCenter, S.Background.white, S.Width._100].join(" ")} style={{minHeight: mainContentMinHeight}}>
                     {this.props.children}
                 </div>
             </div>
         );
     }

}

OneColumn.defaultProps = {
    headerHeight: 300,
    headerImage: null,
    headerText: null,
    headerSubtext: null,
}

export default OneColumn;
// --------------------------------
