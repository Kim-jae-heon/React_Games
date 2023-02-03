import React, { memo, useContext, useMemo } from 'react';
import { TableContext, CODE, OPEN_CELL,
CLICK_MINE, FLAG_CELL, QUESTION_CELL, 
NORMALIZE_CELL } from './MineFind';

const getTdStyle = (code) => {
    switch (code) {
        case CODE.MINE:
            return {
                background: '#444',
            };
        case CODE.NORMAL:
            return {
                background: '#444',
            };
        case CODE.QUESTION:
            return {
                background: 'yellow',
            };
        case CODE.FLAG:
            return {
                background: 'red',
            };
        case CODE.QUESTION_MINE:
            return {
                background: 'yellow',
            };
        case CODE.FLAG_MINE:
            return {
                background: 'red',
            };
        case CODE.CLICKED_MINE:
            return {
                background: 'white',
            };
        case CODE.OPENED:
            return {
                background: 'white',
            };
        default:
            return {
                background: 'white'
            };
    }
}

const getTdText = (code) => {
    switch (code) {
        case CODE.MINE:
            return 'X';
        case CODE.NORMAL:
            return '';
            
        case CODE.QUESTION:
            return '?';
        
        case CODE.FLAG:
            return '!';
        
        case CODE.QUESTION_MINE:
            return '?';
        
        case CODE.FLAG_MINE:
            return '!';
        
        case CODE.CLICKED_MINE:
            return '펑';
        
        case CODE.OPENED:
            return '';
        
        default:
            return code;
    }
}

const Td = memo(({ rowIndex, cellIndex }) => {
    const { tableData, dispatch, halted } = useContext(TableContext);

    const onClickTd = () => {
        if(halted) {
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
                return;
            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.MINE:    
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
                return;
            case CODE.FLAG:
                return;
            case CODE.FLAG_MINE:
                return;
            case CODE.QUESTION:
                return;
            case CODE.QUESTION_MINE:
                return;
            default:
                return;
        }
    }

    const onRightClickTd = (event) => {
        event.preventDefault();
        if(halted) {
            return;
        }
        switch(tableData[rowIndex][cellIndex]) {
            case CODE.NORMAL :
            case CODE.MINE :
                dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex })
                return;
            case CODE.FLAG_MINE :
            case CODE.FLAG :
                dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex })
                return;
            case CODE.QUESTION_MINE :
            case CODE.QUESTION :
                dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex })
                return;
            default:
                return;
        }
    }

    return useMemo(() => (
        <td
            style={getTdStyle(tableData[rowIndex][cellIndex])}
            onClick={onClickTd} onContextMenu={onRightClickTd}
        >{getTdText(tableData[rowIndex][cellIndex])}</td>
    ), [tableData[rowIndex][cellIndex]]);
});

export default Td;