//useEffect와 useRef로 어떤 것 때문에 랜더링이 되는 것인지 확인할 수 있다.
//useEffect안에 props를 넣어주고, useRef안에 props 저장하여 진행.
import React, {useCallback, memo} from 'react';
import { CLICK_CELL } from './TicTacToeHook';

const Td = memo(({cellData, rowIndex, cellIndex, dispatch}) => {
    const onClickTd = useCallback(() => {
        if(cellData) {
            return;    
        }
        dispatch({ type:CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
        <td onClick={onClickTd}>
            {cellData}
        </td>
    );
})

export default Td;