const React = require('react');
const { Component } = React;
const Ball = require('./Ball');

const getNumbers = () => {
    let numbers = Array(45).fill(0).map((_, index) => index + 1);
    let selectedNums = [];
    
    for(let i = 0; i < 6; i++) {
        // 0 ~ 44까지 랜덤한 숫자 회차가 반복될 수록 줄어듦.
        const random = Math.floor(Math.random() * (45 - i));
        const num = numbers.splice(random, 1);
        selectedNums.push(num);
    }

    return selectedNums;
}

class Lotto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedNums: getNumbers(),
            showPickedNums: [],
        }

        this.timeouts = this.refArr();
    }

    refArr = () => {
        return Array(this.state.pickedNums.length).fill(null).map(v => React.createRef());
    }

    componentDidMount() {
        for(let i = 0; i < 6; i++) {
            this.timeouts[i].current = setTimeout(() => {
                this.setState(prevState => {
                    return {
                        showPickedNums: [...prevState.showPickedNums, this.state.pickedNums[i]]
                    }
                });
            }, 1000 * (i + 1));
        }
        console.log(this.timeouts); 
    }
    //componentWillUnmount는 반드시 정리를 위해 필요한 메서드이다. 보이지 않더라도 생각해주어야 함.
    componentWillUnmount() {
        this.timeouts.forEach(element => {
            clearTimeout(element.current);
        });
    }

    render() {
        const { showPickedNums } = this.state;

        return (
            <>
                <h4>숫자</h4>
                <div>
                    {showPickedNums.map(v => <Ball key={v} number={v} />)}
                </div>
            </>
        );
    }
}

module.exports = Lotto;