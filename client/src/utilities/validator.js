// *******************************************************
// General Validation
// -------------------------------------------------------
// This file contains the general and essential file Validation
// functions for our application. Consistent form inputs such as
// Emails, Passwords, Not Empty etc can all be stored in here
// -------------------------------------------
import ValidatorLibrary from 'validator';
import moment from 'moment';

const isEmail = (email) => {
    return (email && ValidatorLibrary.isEmail(email));
}

const isPassword = (password) => {
	return (password && password.length >= 8);
}

const isNotEmpty = (value) => {
    return (value !== null && value !== undefined && value.length > 0);
}

const isString = (value) => {
    return (value !== undefined && (typeof value === 'string') && value.length > 0);
}

const isBool = (value) => {
    return (value !== undefined && (typeof value === 'boolean'));
}

const isNumber = (value) => {
    const number = Number.parseFloat(value, 10);
    return (value !== undefined && !Number.isNaN(number));
}

const isInRange = (value, min, max) => {
    const number = Number.parseFloat(value, 10);
    const result = (value !== undefined && number <= max && number >= min);
    return result
}

const isLength = (value, length) => {
    return (value.length === length);
}

const isArray = (value) => {
    return (value !== undefined && (Array.isArray(value)) && value.length > 0);
}

const isDate = (value) => {
    return new moment(value).isValid();
}

const cleanPercentage = (value) => {
    if (!value) {
        return value;
    }

    if (isString(value)) {
        const noSymbols = value.replace(/[^\d.-]/g, '');
        const cleanValue = parseFloat(noSymbols);
        return cleanValue;
    }

    return parseFloat(value);
}

const cleanDays = (value) => {
    if (!value) {
        return value;
    }

    if (isString(value)) {
        const noSymbols = value.replace(/[^\d]/g, '');
        const cleanValue = parseFloat(noSymbols);
        return cleanValue;
    }

    return parseFloat(value);
}

export const Email = {
    isValid: isEmail,
    message: "You must enter a valid email address."
}

export const Password = {
    isValid: isPassword,
    message: "Your password must be at least 8 characters long"
}

export const Required = {
    isValid: isNotEmpty,
    message: "You must enter a value for this field"
}

export const _Bool = {
    isValid: isBool,
    message: "This field must be a boolean value"
}

export const _Number = {
    isValid: isNumber,
    message: "This field must be a number value"
}

export const _NumberForced = {
    isValid: isNumber,
    cleaner: cleanDays,
    message: "This field must be a number value"
}

export const _Number_Range = (min, max) => {
    const isValid = (number) => {
        return isInRange(number, min, max);
    }
    return {
        isValid: isValid,
        message: `This field must be a number value between ${min} and ${max}`
    }
}

export const _String = {
    isValid: isString,
    message: "This field must be text"
}

export const _Array = {
    isValid: isArray,
    message: "This field must be an Array"
}

export const _Date = {
    isValid: isDate,
    message: "This field must be an Array"
}

export const _Percentage = {
    isValid: isNumber,
    cleaner: cleanPercentage,
    message: "This field must be a number value without the symbol"
}

export const _Days = {
    isValid: isNumber,
    cleaner: cleanDays,
    message: "This field must be a whole number value"
}

export const _Dollars = {
    isValid: isNumber,
    cleaner: cleanPercentage,
    message: "This field must be a number value without the symbol"
}

// Date Validation
export const _Day = {
    isValid: (value) => { return (isNotEmpty(value) && isInRange(value, 1, 31))},
    message: "Day must be between range of 1 - 31"
}

export const _Month = {
    isValid: (value) => { return (isNotEmpty(value) && isInRange(value, 1, 12))},
    message: "Month must be between range of 1 - 12"
}

export const _Year = {
    isValid: (value) => {
        return (
            isNotEmpty(value) &&
            isInRange(value, 1900, new Date().getFullYear())
        );
    },
    message: "Are you the oldest person in livin existance?"
}

export const Code = {
    isValid: (value) => { return isLength(value, 6); },
    message: "Are you the oldest person in livin existance?"
}

export const createConfirmKey = (key) => {
    return `CONFIRM_${key}`;
}
