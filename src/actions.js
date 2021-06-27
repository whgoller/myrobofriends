import { CHANGE_SEARCH_FIELD } from "./constants.js";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// type is the action being taken... this can be a string or a constant.
// it's capitalized because it's a constant 
// payload is the data being entered