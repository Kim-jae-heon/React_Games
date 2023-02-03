import React from 'react';
import ReactDOM from 'react-dom/client';
//client.jsx와 Component가 하나가 되어야 한다.
import MineFind from './지뢰찾기/MineFind';

//여기서 <Gugudan />는 jsx문법에 해당. babel이 동작해야함. webpack에도 babel을 setting해주어야 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MineFind />);