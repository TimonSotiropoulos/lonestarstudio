// *******************************************************
// Responsive
// -------------------------------------------------------
// This is a wrapper for components that need to adjust their
// content based on the screen size. Eg be responsive
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import * as CONSTANTS from '../../constants';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
const Responsive = ({
    props,
    renderDesktopLarge,
    renderDesktop,
    renderTabletLandscape,
    renderTablet,
    renderMobile,
}) => {

    if (renderDesktopLarge && renderDesktop && renderTabletLandscape && renderTablet && renderMobile) {
        return (
            <Fragment>
                <MediaQuery maxWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT}>
                    {renderMobile(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT} maxWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT}>
                    {renderTablet(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT} maxWidth={CONSTANTS.SIZES.TABLET_LANDSCAPE_BREAKPOINT}>
                    {renderTabletLandscape(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.TABLET_LANDSCAPE_BREAKPOINT} maxWidth={CONSTANTS.SIZES.DESKTOP_BREAKPOINT}>
                    {renderDesktop(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.DESKTOP_BREAKPOINT}>
                    {renderDesktopLarge(props)}
                </MediaQuery>
            </Fragment>
        );
    }

    if (renderDesktop && renderTabletLandscape && renderTablet && renderMobile) {
        return (
            <Fragment>
                <MediaQuery maxWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT}>
                    {renderMobile(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT} maxWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT}>
                    {renderTablet(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT} maxWidth={CONSTANTS.SIZES.TABLET_LANDSCAPE_BREAKPOINT}>
                    {renderTabletLandscape(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.TABLET_LANDSCAPE_BREAKPOINT}>
                    {renderDesktop(props)}
                </MediaQuery>
            </Fragment>
        );
    }

    if (renderDesktop && renderTablet && renderMobile) {
        return (
            <Fragment>
                <MediaQuery maxWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT}>
                    {renderMobile(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT} maxWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT}>
                    {renderTablet(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.TABLET_BREAKPOINT}>
                    {renderDesktop(props)}
                </MediaQuery>
            </Fragment>
        );
    }

    if (renderDesktop && renderMobile) {
        return (
            <Fragment>
                <MediaQuery maxWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT}>
                    {renderMobile(props)}
                </MediaQuery>
                <MediaQuery minWidth={CONSTANTS.SIZES.MOBILE_BREAKPOINT}>
                    {renderDesktop(props)}
                </MediaQuery>
            </Fragment>
        );
    }

    if (renderDesktop) {
        return (
            <Fragment>
                {renderDesktop(props)}
            </Fragment>
        );
    }

    return null;
}

export default Responsive;
