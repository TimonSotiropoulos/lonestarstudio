// *******************************************************
// Utilities - General Helper Functinos
// -------------------------------------------------------
// This file contains general utility functions
// -------------------------------------------------------

/**
* @function WAIT
* Pauses execution for a set period of time useful for simulating
* loading situations
* @returns none
*/
export const WAIT = ms => new Promise((r, j)=>setTimeout(r, ms));

/**
* @function swapArrayElements
* Swaps two elements inside an array
* @param array - Initial Array containing the elements to swap
* @param indexA - position of first array item
* @param indexB - position of secont array item
* @return array with elements swapped
*/
export const swapArrayElements = (arr, indexA, indexB) => {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr;
};

/**
* @function createArrayOfLength
* Returns an array of the length provided as a param
* @param length - The length of an array that you want
* @return array
*/
export const createArrayOfLength = (length) => {
    return [...Array(length).keys()];
};

/**
* @function combineArrays
* Swaps two elements inside an array
* @param array - Initial Array containing the elements to swap
* @param indexA - position of first array item
* @param indexB - position of secont array item
* @return array with elements swapped
*/
export const combineArrays = (arrayA, arrayB) => {
    return arrayA.concat(arrayB);
};

/**
* @function itemIsInArray
* Looks for the given item inside an array
* @returns {Boolean} Boolean - A True or False reponse
*/
export const itemIsInArray = (array, key) => {
    return array.includes(key);
}

/**
* @function itemIsNotInArray
* Looks for the given item inside an array
* @returns {Boolean} Boolean - A True or False reponse
*/
export const itemIsNotInArray = (array, key) => {
    return !array.includes(key);
}

/**
* @function isLastItemInArray
* Checks via Index for to see if it is the last item in the array
* @returns {Boolean} Boolean - A True or False reponse
*/
export const isLastItemInArray = (array, index) => {
    return (array.length === index + 1);
}

/**
* @function addItemToArray
* Creates a new array by merging the provided array with the new value
* @returns {Array} Array - A new array containing all the previous values and the new one
*/
export const addItemToArray = (array, value) => {
    return array.concat([value]);
}

/**
* @function removeArrayOfItemsFromArray
* Creates a new array by merging the provided array with the new value
* @returns {Array} Array - A new array with the array of values removed
*/
export const removeArrayOfItemsFromArray = (array, values) => {
    let tempArray = array;
    values.forEach((value) => {
        tempArray = removeItemFromArray(tempArray, value);
    });
    return tempArray;
}

/**
* @function removeItemFromArray
* Removes the item in the array that needs to be removed and returns a new
* instance of the array
* @returns {Array} Array - A new array with the provided value removed
*/
export const removeItemFromArray = (array, value) => {
    if (itemIsNotInArray(array, value)) {
        return array;
    }
    const indexToRemove = array.indexOf(value);
    const startOfArray = array.slice(0, indexToRemove);
    const endOfArray = array.slice(indexToRemove + 1);
    return startOfArray.concat(endOfArray);
}

/**
* @function removeFinalItemFromArray
* Removes the last item in the array and returns a new instance of the array
* @returns {Array} Array - A new array with the provided value removed
*/
export const removeFinalItemFromArray = (array) => {
    if (array.length > 1) {
        const newArrayLength = array.length - 1;
        return [].concat(array.splice(0, newArrayLength));
    }
    if (array.length === 1) {
        return [];
    }
    if (array.length === 0) {
        return [];
    }
}


/**
* @function searchArrayInArrayForItem
* @description determine if an array contains one or more items from another array.
* @param {array} haystack the array to search.
* @param {array} arr the array providing items to check for in the haystack.
* @return {boolean} true|false if haystack contains at least one item from arr.
*/
export const searchArrayInArrayForItem = function (haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};

/**
* @function transformArrayToUppercase
* @description transform array elements to uppercase
* @param {array} haystack the array to search.
* @param {array} arr the array providing items to check for in the haystack.
* @return {boolean} true|false if haystack contains at least one item from arr.
*/
export const transformArrayToUppercase = (array) => {
    return array.map((item) => {
        return item.toUpperCase();
    })
};


/**
* @function translateNumberToNewRange
* Transforms a value from one range of numbers to the new range
* @returns {Number} Number - A translated number
*/
export const translateNumberToNewRange = (input, inputRange, outputRange) => {
    const output = ((input - inputRange.low) / (inputRange.high - inputRange.low)) * (outputRange.high - outputRange.low) + outputRange.low;
    return output;
}

/**
* @function translateNumberByRatio
* Takes in a ratio and finds the missing value of the new number based on that ratio.
* Useful for converting images sizes from one range to another
* @returns {Number} Number - A translated number
*/
export const translateNumberByRatio = (inputA, inputB, outputC) => {
    const outputD = outputC * (inputB/inputA);
    return outputD;
}

/**
* @function clampNumber
* Takes in a ratio and finds the missing value of the new number based on that ratio.
* Useful for converting images sizes from one range to another
* @returns {Number} Number - A translated number
*/
export const clampNumber = (number, min, max) => {
    return Math.min(Math.max(number, min), max);
}

/**
* @function getCurrentMonth
* Gets a well formatted month using todays current date.
* @returns {String} String - A string of the returned date
*/
export const getCurrentMonth = (monthIndex) => {
    var d = new Date(2000, monthIndex);
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
    return month[d.getMonth()];
}

/**
* @function generateRandomString
* generates and returns a random GUID like string
* @returns {String} String - A random string
*/
export const generateRandomString = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/**
* @function calculateDistanceBetweenGPSPointsInKM
* Calculates distance between two lat long points and returns distance in kilometers
* @returns {String} String - A random string
*/
export const calculateDistanceBetweenGPSPointsInKM = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = convertDegreesToRadians(lat2-lat1);
    var dLon = convertDegreesToRadians(lon2-lon1);
    var a =  Math.sin(dLat/2) * Math.sin(dLat/2) +
             Math.cos(convertDegreesToRadians(lat1)) * Math.cos(convertDegreesToRadians(lat2)) *
             Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    if (d >= 10) {
        return d.toFixed(0);
    } else {
        return d.toFixed(2);
    }
}

/**
* @function convertDegreesToRadians
* Converts a degree to radians
* @returns {String} String - A random string
*/
export const convertDegreesToRadians = (deg) => {
    return deg * (Math.PI/180);
}

/**
* @function isVariableDefined
* Checks safely to see if a variable is defined or not.
* @returns {Boolean} Boolean - Will return a flag if it is defined or not
*/
export const isVariableDefined = (variable) => {
    return (typeof variable !== 'undefined' && variable !== null);
}

/**
* @function setToVarOrNull
* Checks safely to see if a variable is defined or not.
* @returns {Boolean} Boolean - Will return a flag if it is defined or not
*/
export const setToVarOrNull = (variable) => {
    const varIsDefinedFlag = isVariableDefined(variable);
    return (varIsDefinedFlag) ? variable : null;
}
