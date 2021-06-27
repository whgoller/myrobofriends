import React, { useState, useEffect } from "react";
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import '../containers/App.css'

function App() {

    // state 
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState("");
    const [count, setCount] = useState(0);

    // useEffect will run every time the app renders, but will only run after the first render because of the second parameter of an empty [].
    // useEffect is a special function that is run automatically (it's part of the react lifecycle)
    // we pass the optional array because we are setting a state in the function.  we give it an empty array which is a shortcut for the componentDidMount function. 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(this.props.store);
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    //if empty robots.length will evaluate to 0 and 0 evaluates to false in JS and then turning the if into ternary opperator syntax
    return !robots.length ? <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardArray robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}
export default App;