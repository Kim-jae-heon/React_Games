const React = require('react');
const { Component } = React;

const Td = require('./Td');

class Tr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { row, value, func, structure } = this.props;

        return(
            <>
                <tr>
                    { value.map((val, idx) => 
                    <Td value={val} 
                        cell={idx} 
                        key={idx} structure={structure}
                        row={row} 
                        func={func}/>) }
                </tr>
            </>
        );
    }
}

module.exports = Tr;