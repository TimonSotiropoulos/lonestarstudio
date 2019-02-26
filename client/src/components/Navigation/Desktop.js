// *******************************************************
// Desktop Navigation
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ACTIONS from '../../actions';
import * as S from '../../styles';
import * as C from '../index';
import * as CONSTANTS from '../../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Desktop extends Component {

    _logout = () => {
        this.props.logout();
    }

    _renderLink = (label, route) => {
        const fontColour = (this.props.barStyle === 'LIGHT') ? S.Fonts.Colour_white_Hover : S.Fonts.Colour_black_Hover;
        return (
            <C.Text.Link href={route} textDecoration={"none"}>
                <div className={[S.Margin.Right_25, S.Fonts.BrandonGrotesque_light, S.Fonts.Size_22, fontColour].join(" ")} style={{lineHeight: 1.5}}>
                    {label}
                </div>
            </C.Text.Link>
        );
    }

    _renderCallToAction = (label, route) => {
        const buttonType = (this.props.barStyle === 'LIGHT') ? 'white' : null;
        return (
            <C.Text.Link href={route} textDecoration={"none"}>
                <C.Button type={buttonType} width={null} height={50} fontSize={S.Fonts.Size_16}>
                    {label}
                </C.Button>
            </C.Text.Link>
        );
    }

    _renderLoggedInDropdown = () => {

        const renderDropdownLink = (label, route) => {
            return (
                <li>
                    <Link to={route} style={{cursor: 'pointer', textDecoration: 'none'}} onClick={this.props.onClick}>
                        <div className={[S.Width._100, S.Layout.textCenter, S.Padding.Top_20, S.Padding.Bottom_17, S.Fonts.Bebas, S.Fonts.Size_16, S.Fonts.LetterSpacing_2, S.Fonts.Colour_blackBlue_Hover].join(" ")}>
                            {label}
                        </div>
                    </Link>
                </li>
            );
        }

        const renderLogoutButton = () => {
            return (
                <li>
                    <div onClick={this._logout} className={[S.Width._100, S.Layout.textCenter, S.Padding.Top_20, S.Padding.Bottom_17, S.Fonts.Bebas, S.Fonts.Size_16, S.Fonts.LetterSpacing_2, S.Fonts.Colour_blackBlue_Hover].join(" ")} style={{cursor: 'pointer'}}>
                        LOGOUT
                    </div>
                </li>
            );
        }

        return (
            <div className={[S.Padding.Left_20].join(" ")} style={{height: 50}}>
                <ul>
                    <li>
                        <C.Image image={this.props.userData.profile.profileImage} width={'50px'} height={'50px'} />
                        <ul>
                            <div className={[S.Background.transparent, S.Width._100].join(" ")} style={{position: 'absolute', top: -10, left:0, height: 10}} />
                            <div className="arrow-up"></div>
                            <div className={[S.BoxShadow.navigation].join(" ")}>
                                {renderDropdownLink("HEALTH CHECK", CONSTANTS.ROUTES.HOME)}
                                {renderDropdownLink("PURCHASES", CONSTANTS.ROUTES.HOME)}
                                {renderDropdownLink("VIEW ACCOUNT", CONSTANTS.ROUTES.MANAGE_ACCOUNT)}
                                {renderLogoutButton()}
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }

    render() {

        const fontColour = (this.props.barStyle === 'LIGHT') ? S.Fonts.Colour_white_Hover : S.Fonts.Colour_black_Hover;
        const logoType = (this.props.barStyle === 'LIGHT') ? 'light-logo' : 'dark-logo';
        const paddingLeft = (this.props.paddingLeft) ? this.props.paddingLeft : S.Padding.Left_50;
        const paddingRight = (this.props.paddingLeft) ? this.props.paddingRight : S.Padding.Right_50;
        return (
            <div className={[S.Width._100, S.Layout.flexRow, S.Layout.mainAxisBetween, S.Layout.altAxisCenter, paddingLeft, paddingRight].join(" ")} style={{position: 'absolute', top:0, left: 0, height: CONSTANTS.SIZES.NAVIGATION_BAR_DESKTOP_HEIGHT}}>
                <C.Text.Link href={CONSTANTS.ROUTES.HOME} textDecoration={"none"}>
                    <C.Icon icon={this.props.iconOverride || logoType} width={this.props.width} height={this.props.height} />
                </C.Text.Link>
                <div className={[S.Layout.flexRow, S.Layout.bothAxisCenter].join(" ")}>
                    {this._renderLink('Resources', CONSTANTS.ROUTES.HOME)}
                    {this._renderLink('Contact', CONSTANTS.ROUTES.HOME)}
                    {(!this.props.auth.isAuthenticated) ? this._renderLink('Login', CONSTANTS.ROUTES.LOGIN) : null}
                    {(this.props.auth.isAuthenticated) ? this._renderLink('Account', CONSTANTS.ROUTES.MANAGE_ACCOUNT) : null}
                    {this._renderCallToAction(this.props.callToActionLabel, this.props.callToActionRoute)}
                    {(this.props.auth.isAuthenticated) ? this._renderLoggedInDropdown() : null}
                </div>
            </div>
        );
    }
}

Desktop.defaultProps = {
    barStyle: 'LIGHT',
    iconOverride: null,
    callToActionLabel: 'Call To Action',
    callToActionRoute: CONSTANTS.ROUTES.HOME
}

// *******************************************
// Redux Connection
// -------------------------------------------
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        userData: state.profile,
    };
}

export default connect(mapStateToProps, {
    // logout: ACTIONS.AUTH.logout
})(Desktop);
// --------------------------------
