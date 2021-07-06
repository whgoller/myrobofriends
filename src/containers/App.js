import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from '../actions.js';

import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";

import '../containers/App.css';

// tell me what pieces of state I need to listen too and send down as props
// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// in the flux pattern dispatch is what sends action
// tell me what props I need to listen to that are actions that need to get dispatched
// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {
                        isPending ? <h1>Loading</h1> :
                            <ErrorBoundary>
                                <CardArray robots={filteredRobots} />
                            </ErrorBoundary>
                    }
                </Scroll>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect is a higher order function - it returns another function
// connect accepts 2 parameters - mapStateToProps, mapDispatchToProps'
// connect is what tells the component, in this case the App component, to subscibe to any state changes.
// action done from mapDispatchToProps will channge state from mapStateToProps
