import React, { useContext, memo } from 'react';
import Td from './Td';
import { TableContext } from './MineFind'; 

const Tr = memo(({ rowIndex }) => {
    const { tableData } = useContext(TableContext);

    return (
        <tr>
            {tableData[0] && Array(tableData[0].length).fill().map((td, idx) => (<Td key={idx} rowIndex={rowIndex} cellIndex={idx} />))}
        </tr>
    );
})

export default Tr;