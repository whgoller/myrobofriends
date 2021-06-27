import React, { Component } from "react";
import { connect } from "react-redux";
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import '../containers/App.css';

import { setSearchField } from '../actions.js'

// tell me what pieces of state I need to listen too and send down as props
const mapStateToProps = state => {
    return {
        // searchfield: state.searchRobots.searchfield
        searchField: state.searchField
    }
}

// in the flux pattern dispatch is what sends action
// tell me what props I need to listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        //if empty robots.length will evaluate to 0 and 0 evaluates to false in JS and then turning the if into ternary opperator syntax
        return !robots.length ? <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardArray robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// connect is a higher order function - it returns another function
// connect accepts 2 parameters - mapStateToProps, mapDispatchToProps'
// connect is what tells the component, in this case the App component, to subscibe to any state changes.