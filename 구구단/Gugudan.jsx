const React = require('react');
const { Component } = React;

class Gugudan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOne: Math.ceil(Math.random() * 8 + 1),
            numberTwo: Math.ceil(Math.random() * 8 + 1),
            value: '',
            result: '',
        }
        this.myRef = React.createRef();
    }

    numsChange = (event) => {
        this.setState({
            value: parseInt(event.target.value),
        });
    }

    checkOut = () => {
        if(this.state.numberOne * this.state.numberTwo === this.state.value) {
            return this.setState({result: '정답입니다!!'});
        } 
        this.setState({
            value: '',
            result: '다시 시도해보세요!'
        });
        this.myRef.current.focus();
    }

    render() {
        return (
            <React.Fragment>
                <h1>맞춰보세요 구구단!</h1>
                <div>{this.state.numberOne} 곱하기 {this.state.numberTwo}는?</div>
                <input type="number" ref={this.myRef} value={this.state.value} onChange={this.numsChange}/>
                <button onClick={this.checkOut}>입력</button>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}

module.exports = Gugudan;