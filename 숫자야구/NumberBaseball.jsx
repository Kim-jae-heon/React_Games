const React = require('react');
const { PureComponent } = React;

//class밖으로 뺄 수 있는 조건? this를 안쓰면 밖으로 뺄 수 있다!! class안으로 넣어버리면 해당 로직을 다른 곳에서 사용이 불가능. class밖으로 빼면 해당 로직을 다른 곳에서도 사용이 가능하다!
//module.exports를 이용한 타지에서의 활용 또한 가능! 밖으로 빼놓게되면 독립적으로 존재하기 때문에 component가 class이던 hooks이던 영향을 받지 않는다.

class NumberBaseball extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answer: this.numberPicking(),
            values: '',
            strike: 0,
            ball: 0,
            count: 0,
            states: '',
        }
        this.mouseOn = React.createRef();
    }

    componentDidMount() {
        this.mouseOn.current.focus();
    }

    //영상에서는 이 함수를 컴포넌트 바깥에 작성.
    numberPicking = () => {
        let numbersList = Array(10).fill(null).map((value, index) => index);
        const answer = [];

        for(let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(Math.random() * (numbersList.length - 1));
            answer.push(numbersList.splice(randomNumber, 1));
        }

        return answer.join('');
    }

    numsInput = (event) => {
        this.setState({
            values: event.target.value,
        });
    }

    checkNums = (event) => {
        event.preventDefault();
        const { answer, values } = this.state;
        //strike와 ball의 제로화. 
        this.setState({
            strike: 0,
            ball: 0,
            states: '',
        });
        //스트라이크 볼 여부 검사
        if(values === answer) {
            return this.setState({
                answer: this.numberPicking(),
                states: '홈런!!!!!!!',
            });
        }

        this.setState(prevState => {{ count: prevState.count++ }});

        for(let i = 0; i < 4; i++) {
            const check = answer.search(values[i]);
            if(check === -1) continue;
            if(i === check) {
                this.setState(prevState => {{
                    strike: ++prevState.strike
                    console.log(prevState);
                }});
                continue;
            } 
            this.setState(prevState => {{
                            ball: ++prevState.ball
                        }});
        }
    }

    render() {
        return (
            <>
                <h1>숫자야구</h1>
                <form onSubmit={this.checkNums}>
                    <h2>시도횟수: { this.state.count }</h2>
                    <label htmlFor="board">
                        { !this.state.states ? `${this.state.strike} 스트라이크 ${this.state.ball} 볼 입니다!` : this.state.states }  
                    </label>
                    <br/>
                    <input type="text" name='board'
                        ref={this.mouseOn}
                        value={this.state.values} 
                        onChange={this.numsInput} 
                        maxLength="4"/>
                    <button type='submit'>맞춰보기!</button>
                </form>
            </>
        );
    }
}

module.exports = NumberBaseball;