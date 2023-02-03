const React = require('react');
const { Component } = React;

const Tr = require('./Tr');

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: 'O',
            structure: Array(3).fill(null).map(value => Array(3).fill(null).map(val => null)),
            state: [-1, -1],
        }
    }

    componentDidUpdate(_, prevState) {
        const { player, state } = this.state;
        const [row, cell] = state;

        if(prevState.state !== state) {
            if(player === 'O') this.setState({ player: 'X' });
            if(player === 'X') this.setState({ player: 'O' });
        }
    }

    rowAndCell = (row, cell) => {
        const structure = [...this.state.structure];
        structure[row] = [...structure[row]];
        structure[row][cell] = this.state.player;
        this.setState({
            structure,
            state: [row, cell],
        });
    }

    render() {
        const { structure } = this.state;

        return (
            <>
                <table>
                    <tbody>
                        { this.state.structure.map((value, index) => 
                        <Tr row={ index } 
                            value={ value } 
                            key={ index } 
                            func={ this.rowAndCell } 
                            structure={ structure } />) }
                    </tbody>
                </table>
            </>
        );
    }
}

module.exports = TicTacToe;