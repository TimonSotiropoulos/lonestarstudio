// *******************************************************
// Arrow
// -------------------------------------------------------
// This is the a component for rendering an arrow made out
// of scss elements
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React from 'react';
// --------------------------------

const DownArrow = (size, color) => {
    const borderColor = (color) ? color : 'black';
    return {
        width: 0,
        height: 0,
        borderLeft: `${size} solid transparent`,
        borderRight: `${size} solid transparent`,
        borderTop: `${size} solid ${borderColor}`
    };
}

const UpArrow = (size, color) => {
    const borderColor = (color) ? color : 'black';
    return {
        width: 0,
        height: 0,
        borderLeft: `${size} solid transparent`,
        borderRight: `${size} solid transparent`,
        borderBottom: `${size} solid ${borderColor}`
    };
}

const LeftArrow = (size, color) => {
    const borderColor = (color) ? color : 'black';
    return {
        width: 0,
        height: 0,
        borderTop: `${size} solid transparent`,
        borderBottom: `${size} solid transparent`,
        borderRight: `${size} solid ${borderColor}`
    };
}

const RightArrow = (size, color) => {
    const borderColor = (color) ? color : 'black';
    return {
        width: 0,
        height: 0,
        borderTop: `${size} solid transparent`,
        borderBottom: `${size} solid transparent`,
        borderLeft: `${size} solid ${borderColor}`
    };
}

const getDirectionArrow = (direction, size, color) => {
    switch (direction) {
        case 'up':
            return UpArrow(size, color);
        case 'down':
            return DownArrow(size, color);
        case 'left':
            return LeftArrow(size, color);
        case 'right':
            return RightArrow(size, color);
        default:
            return UpArrow(size, color);
    }
}

const Arrow = ({size, direction, paddingBottom, marginBottom, marginTop, color}) => {

    const arrowSize = size || '10px';
    let desktopArrowStyle = getDirectionArrow(direction, arrowSize, color);

    return (
        <div className={[color].join(" ")} style={desktopArrowStyle}></div>
    );

}

export default Arrow;
