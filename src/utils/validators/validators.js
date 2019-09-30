export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return 'Field is required';
}

export const numberField = (value) => {
    if (value && !value.match(/^\d+$/)) {
        return 'Value should be a number';
    }
    return undefined;
}

export const stringWithSpacesField = (value) => {
    if (!value.match(/^[a-zA-Z]+( [a-zA-Z]+)*$/)) {
        return 'Value should be a string';
    }
    return undefined;
}