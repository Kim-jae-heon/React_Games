const React = require('react');
const { memo } = React;

const numberAndColor = (number) => {
    const numAndColor = [number];

    if(number > 40) {
        numAndColor.push('blue');
        return numAndColor;
    }

    if(number > 30) {
        numAndColor.push('green');
        return numAndColor;
    }

    if(number > 20) {
        numAndColor.push('yellow');
        return numAndColor;
    }

    if(number > 10) {
        numAndColor.push('orange');
        return numAndColor;
    }

    if(number > 0) {
        numAndColor.push('red');
        return numAndColor;
    }
}

const Ball = memo((props) => {
    const [number, color] = numberAndColor(props.number);

    return (
        <div className={`ball ${color}`}>
            <span className='text'>{number}</span>
        </div>
    );
})

module.exports = Ball;