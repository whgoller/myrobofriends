import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    // this switch could also be an if but react documentation recommends a switch
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // to update the state object return new state plus the updated change to the searchField
            // you can do it in one of two ways and instead of doing 
            // return state.searchField = action.payload
            // do the following:
            //return Object.assign({}, state, searchField: action.payload)
            // or use an object destructor or a spread operator
            //return { ...state, searchField: action.payload }
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}