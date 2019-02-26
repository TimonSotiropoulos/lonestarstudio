// *******************************************************
// Image
// -------------------------------------------------------
// This is the Image component file. It handles adding the
// image into the background of a div via a passed in
// property
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React from 'react';
import * as S from '../../styles';
// --------------------------------

// *******************************************
// Component Implementation
// -------------------------------------------
const Image = ({
    children,
    image,
    size,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    circle = false,
    repeat,
    cover,
    zIndex = 0,
    backgroundColor = null,
    backgroundPosition = 'center',
    marginTop = null,
    marginBottom = null,
    marginLeft = null,
    marginRight = null,
    paddingTop = null,
    paddingBottom = null,
    paddingLeft = null,
    paddingRight = null,
    onClick = null,
    align =  S.Layout.bothAxisCenter
}) => {

    const finalSize = (size) ? size : null;
    const finalWidth = finalSize || width;
    const finalHeight = finalSize || height;

    const styles = {
        width: finalWidth,
        height: finalHeight,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        backgroundImage: `url(${image})`,
        backgroundRepeat: repeat || 'no-repeat',
        backgroundSize: cover || '100% 100%',
        backgroundPosition: backgroundPosition,
        borderWidth: (circle) ? finalWidth : null,
        borderRadius: (circle) ? finalWidth : null,
        cursor: (onClick) ? 'pointer' : null,
        zIndex: zIndex
    }
    return (
        <div className={[S.Layout.flexCol, align, backgroundColor, marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight].join(" ")} style={styles} onClick={onClick}>{children}</div>
    );

}

export default Image;
// --------------------------------
