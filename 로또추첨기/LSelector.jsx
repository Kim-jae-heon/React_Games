const React = require('react');
const { useState, useRef, useEffect } = React;
//useRef, useMemo, useCallback은 React Hooks의 함수 전체를 리렌더링하는 문제를 해결하기 위해 탄생.
//값 기억, 함수의 리턴값 기억, 함수 자체를 기억(함수 생성자체의 비용이 큰 경우)
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

const LSelector = () => {
    const [pickedNums, setPickedNums] = useState(getNumbers);
    const [showPickedNums, setShowPickedNums] = useState([]);
    const timeouts = useRef([]);

    useEffect(() => {
        for(let i = 0; i < 6; i++) {
            timeouts.current[i] = setTimeout(() => {
                setShowPickedNums(prevShowPickedNums => [...prevShowPickedNums, pickedNums[i]]);
            }, 1000 * (i + 1));
        }

        return () => {
            timeouts.current.forEach(element => {
                clearTimeout(element);
            });
        }
    }, [timeouts.current]);

    return (
        <>
            <h4>숫자</h4>
            <div>
                {showPickedNums.map(v => <Ball key={v} number={v} />)}
            </div>
        </>
    );
}

module.exports = LSelector;