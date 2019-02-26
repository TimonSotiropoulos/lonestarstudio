// *******************************************************
// Mobile Navigation
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions';
import * as S from '../../styles';
import * as C from '../index';
import * as HOC from '../HOC';
import * as CONSTANTS from '../../constants';
import './mobile.scss';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Mobile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widthMobileNav: '0%'
        }
    }

    _logout = (event) => {
        this.props.logout();
    }

    _openMobileNav = (event) => {
        this.setState({
            widthMobileNav: '100%'
        })
    }

    _closeMobileNav = (event) => {
        this.setState({
            widthMobileNav: '0%'
        })
    }

    _renderLink = (label, route) => {
        return (
            <C.Text.Link href={route} textDecoration={"none"}>
                <div className={[S.Fonts.BrandonGrotesque_regular, S.Fonts.Size_25, S.Fonts.Colour_black, S.Margin.Bottom_20].join(" ")}>
                    {label}
                </div>
            </C.Text.Link>
        );
    }

    _renderAccountLink = (route) => {
        return (
            <C.Text.Link href={route} textDecoration={"none"}>
                <div className={[S.Layout.flexRow, S.Layout.mainAxisStart, S.Layout.altAxisCenter, S.Margin.Bottom_15].join(" ")}>
                    <C.Image image={this.props.userData.profile.profileImage} width={50} height={50} />
                    <div className={[S.Fonts.BrandonGrotesque_regular, S.Fonts.Size_25, S.Fonts.Colour_black, S.Margin.Left_20].join(" ")}>
                        Account
                    </div>
                </div>
            </C.Text.Link>
        );
    }

    _renderLogout = () => {
        return (
            <C.Text.Link href={CONSTANTS.ROUTES.HOME} textDecoration={"none"}>
                <div onClick={this._logout} className={[S.Layout.flexRow, S.Layout.mainAxisStart, S.Layout.altAxisCenter, S.Margin.Bottom_15].join(" ")}>
                    <div className={[S.Fonts.BrandonGrotesque_regular, S.Fonts.Size_25, S.Fonts.Colour_black].join(" ")}>
                        Logout
                    </div>
                </div>
            </C.Text.Link>
        );
    }

    _renderSlideOutNavigationMenu = () => {
        return (
            <div id="myNav" className="overlay" style={{width: this.state.widthMobileNav}}>
                <div className="overlay-content" style={{borderLeft: '1px solid grey'}}>
                    <div className={[S.Padding.Top_40, S.Padding.Left_40].join(" ")} style={{flexGrow:"11"}}>
                        <C.Text.Link href={CONSTANTS.ROUTES.HOME} textDecoration={"none"} marginBottom={S.Margin.Bottom_50}>
                            <C.Icon icon={'dark-logo-mobile'} />
                        </C.Text.Link>
                        {(this.props.auth.isAuthenticated) ? this._renderAccountLink(CONSTANTS.ROUTES.MANAGE_ACCOUNT) : null}
                        {this._renderLink('Health Check Quiz', CONSTANTS.ROUTES.HOME)}
                        {this._renderLink('Purchases', CONSTANTS.ROUTES.HOME)}
                        {this._renderLink('Resources', CONSTANTS.ROUTES.HOME)}
                        {this._renderLink('Contact', CONSTANTS.ROUTES.HOME)}
                        {(!this.props.auth.isAuthenticated) ? this._renderLink('Signup', CONSTANTS.ROUTES.SIGNUP): null}
                        {(!this.props.auth.isAuthenticated) ? this._renderLink('Login', CONSTANTS.ROUTES.LOGIN): null}
                        {(this.props.auth.isAuthenticated) ? this._renderLogout() : null}
                    </div>
                    <div style={{flexGrow:"1"}}>
                        <div className="flex-container-left">
                            <div style={{backgroundColor:"#d0b82c", height:"50px", justifyContent:"space-around", cursor: 'pointer'}}>
                                <a href={this._closeMobileNav} onClick={this._closeMobileNav} style={{color:"white"}}>&times;</a>
                            </div>
                            <div style={{flexGrow:"15"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        const fontColour = (this.props.barStyle === 'LIGHT') ? S.Fonts.Colour_white : S.Fonts.Colour_black;
        const logoType = (this.props.barStyle === 'LIGHT') ? 'light-logo-mobile' : 'dark-logo-mobile';

        return (
            <div className={[S.Width._100, S.Layout.flexRow, S.Layout.mainAxisBetween, S.Layout.altAxisCenter, S.Padding.Left_10, S.Padding.Right_10].join(" ")} style={{position: 'absolute', top:0, left: 0, height: CONSTANTS.SIZES.NAVIGATION_BAR_MOBILE_HEIGHT}}>
                <C.Text.Link href={CONSTANTS.ROUTES.HOME} textDecoration={"none"}>
                    <C.Icon icon={logoType} />
                </C.Text.Link>
                <div onClick={this._openMobileNav} className={[S.Layout.flexRow, S.Layout.bothAxisCenter].join(" ")} style={{cursor: 'pointer'}}>
                    <div className={[S.Fonts.BrandonGrotesque_light, S.Fonts.Size_16, fontColour, S.Margin.Right_10].join(" ")}>
                        Menu
                    </div>
                    <div className={[fontColour, S.Fonts.Size_30].join(" ")}>
                        &#9776;
                    </div>
                </div>
                {this._renderSlideOutNavigationMenu()}
            </div>
        );
    }
}

Mobile.defaultProps = {
    barStyle: 'LIGHT'
}
// --------------------------------



// *******************************************
// Redux Connection
// -------------------------------------------
const mapStateToProps = (state) => {
    return {
        userData: state.profile,
        auth: state.auth
    };
}

// export default Header;
export default connect(mapStateToProps, {
    // logout: ACTIONS.AUTH.logout
})(Mobile);
// --------------------------------
