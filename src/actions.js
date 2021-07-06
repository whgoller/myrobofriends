import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js";

// setSearchField could also be written as the following:
// export const setSearchField = (text) => {
//     return ({
//         type: CHANGE_SEARCH_FIELD,
//         payload: text
//     })
// }

// type is the action being taken... this can be a string or a constant.npm start
// it's capitalized because it's a constant 
// payload is the data being entered


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

// this is a higher order function. a function that returns a function.
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}