const React = require('react');
const { PureComponent } = React;

class Td extends PureComponent {
    constructor(props) {
        super(props);
    }

    tdInfo = () => {
        const { row, cell, func, structure } = this.props;
        if(structure[row][cell]) return;
        func(row, cell);
    }

    render() {
        const { row, cell, structure } = this.props;

        return(
            <>
                <td onClick={this.tdInfo}>{structure[row][cell]}</td>
            </>
        );
    }
}

module.exports = Td;