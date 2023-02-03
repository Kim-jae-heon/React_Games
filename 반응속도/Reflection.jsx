const React = require('react');
const { Component } = React;

class Reflection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'initialState',
            comment: '클릭하면 시작합니다!!',
            signed: 0,
        };
    }

    time;
    timer;

    startGame = () => {
        this.setState({
            screen: 'onGoingState',
            comment: '지금 클릭하면 안되용~',
        });
        
        const timeout = Math.floor(Math.random() * 3000) + 3000;
        this.time = setTimeout(() => {
            this.timer = new Date();
            this.setState({
                screen: 'stateNow',
                comment: '지금!!!!'
            });
        }, timeout);
    }

    endGame = () => {
        this.setState({
            screen: 'initialState',
            comment: '클릭하면 시작합니다!!',
            signed: new Date() - this.timer 
        });
        this.timer = 0;
        clearTimeout(this.time);
    }

    render() {
        const { screen, comment, signed } = this.state;

        return(
            <>
                <h1>반응속도 테스트 - 오랜지 색을 눌러주세요!</h1>
                <div className={ screen } onClick={ screen === 'initialState' 
                                        ? this.startGame : this.endGame }>
                    { comment }
                </div>
                <h4>{ `${signed / 1000}초 소요!` }</h4>
            </>
        );
    }
}

module.exports = Reflection;