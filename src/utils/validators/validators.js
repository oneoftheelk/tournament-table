export const requiredField = (value) => {
    if (!value) {
        return 'Field is required';
    }
    return undefined;
}

export const numberField = (value) => {
    if (value && !value.match(/^\d+$/)) {
        return 'Value should be a number';
    } else if (value && value.length > 4) {
        return 'Maximum 4 digits';
    }
    return undefined;
}

export const stringField30 = (value) => {
    if (!value.match(/^[a-zA-Z]+( [a-zA-Z]+)*$/)) {
        return 'Value should be a string';
    } else if (value.length > 30) {
        return 'Maximum 30 symbols';
    }
    return undefined;
}