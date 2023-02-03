const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 'hello',
        }
    }

    render() {
        return (
            <div>{this.state.value}</div>
        );
    }
}

module.exports = WordRelay;