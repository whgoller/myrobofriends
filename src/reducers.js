import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js";

const initialStateSearch = {
    searchField: ''
}


export const searchRobots = (state = initialStateSearch, action = {}) => {
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
            return state
    }
}

const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state
    }
}