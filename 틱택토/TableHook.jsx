import React, {memo} from 'react';
import Tr from './TrHook';

const Table = ({ tableData, dispatch }) => {
    return (
        <table>
            <tbody>
                {Array(tableData.length).fill()
                .map((value, index) => <Tr rowData={tableData[index]} key={index}
                                        rowIndex={index} dispatch={dispatch} />)}
            </tbody>
        </table>
    );  
}

export default Table;