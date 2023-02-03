import React, { memo } from 'react';
import Td from './TdHook';

const Tr = memo(({ rowIndex, rowData, dispatch }) => {
    return (
        <tr>
            {Array(rowData.length).fill()
            .map((val, idx) => (<Td cellIndex={idx} dispatch={dispatch} key={idx}
                                rowIndex={rowIndex} cellData={rowData[idx]} />))}
        </tr>
    );
})

export default Tr;