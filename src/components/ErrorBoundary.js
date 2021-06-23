import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1> Oooops. That is not good </h1>
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundary;