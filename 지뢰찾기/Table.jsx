import React, { useContext, memo } from 'react';
import Tr from './Tr';
import { TableContext } from './MineFind';

const Table = memo(() => {
    const { tableData } = useContext(TableContext);

    return (
        <table>
            <tbody>
                {Array(tableData.length).fill().map((tr, index) => (<Tr key={index} rowIndex={index} />))}
            </tbody>
        </table>
    );
})

export default Table;