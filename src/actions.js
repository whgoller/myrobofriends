import { CHANGE_SEARCH_FIELD } from "./constants.js";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});


// could also be written as the following:
// export const setSearchField = (text) => {
//     return ({
//         type: CHANGE_SEARCH_FIELD,
//         payload: text
//     })
// }

// type is the action being taken... this can be a string or a constant.npm start
// it's capitalized because it's a constant 
// payload is the data being entered