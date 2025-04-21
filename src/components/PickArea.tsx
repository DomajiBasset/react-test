import React, { useEffect, useState } from 'react';
import { RowData, rowData, th_Columns } from '../config/pickItem.config';
import PickItem from './PickItem';

type Props = {
    value: RowData[];
    setValue: (value: RowData[]) => void;
};
const PickArea = ({ value, setValue }: Props) => {
    // 控制選擇的 radio button
    const [selectedOption, setSelectedOption] = useState('1');
    const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>({});
    const [UnselectData, setUnSelectData] = useState<RowData[]>(rowData);

    useEffect(() => {
        setSelectedRows({});
    }, [selectedOption]);

    const rowsData = selectedOption === '1' ? UnselectData : value;
    const isAllSelected = rowsData.length > 0 && rowsData.every((r) => selectedRows[r.id]);

    const handleSelect = (id: string) => {
        setSelectedRows((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const newSelected = checked
            ? Object.fromEntries(rowsData.map((r) => [r.id, true]))
            : {};
        setSelectedRows(newSelected);
    };

    const handleClick = () => {
        const newSelectData = [...value];
        const newUnselectData = [...UnselectData];

        if (selectedOption === '1') {
            const updatedUnselectData = newUnselectData.filter((data) => {
                if (selectedRows[data.id]) {
                    newSelectData.push(data);
                    return false;
                }
                return true;
            });
            setUnSelectData(updatedUnselectData);
            setValue(newSelectData);
            setSelectedRows({});
        } else {
            const updatedSelectData = newSelectData.filter((data) => {
                if (selectedRows[data.id]) {
                    newUnselectData.push(data);
                    return false;
                }
                return true;
            });
            setValue(updatedSelectData);
            setUnSelectData(newUnselectData);
            setSelectedRows({});
        }
    };

    // 根據選擇顯示不同的 table
    const renderTable = () => {
        const rowData = selectedOption === '1' ? UnselectData : value;
        return (
            <table className="data_table pick-cont sort-table w-full border-collapse text-sm whitespace-nowrap border">
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='th-width-5 px-4 py-2 text-center' >
                            <input
                                type="checkbox"
                                className="cb-pick-all w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-400"
                                checked={isAllSelected}
                                onChange={handleSelectAll}></input>
                        </th>
                        {th_Columns.map((col, index) => (
                            <th key={index} className={`${col.className} px-4 py-2 text-left`}>
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((row) => (
                        <PickItem
                            key={row.id}
                            rowData={row}
                            selected={!!selectedRows[row.id]}
                            onSelect={handleSelect}
                        />
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="picked-area">
            <label htmlFor="radio-1" className="label-input-item">
                <input
                    type="radio"
                    name="pick-rd"
                    id="radio-1"
                    checked={selectedOption === '1'}
                    onChange={() => setSelectedOption('1')}
                />
                未選擇清單
            </label>

            <label htmlFor="radio-2" className="label-input-item">
                <input
                    type="radio"
                    name="pick-rd"
                    id="radio-2"
                    checked={selectedOption === '2'}
                    onChange={() => setSelectedOption('2')}
                />
                已選擇清單
            </label>

            <span className="selected-count">：{Object.keys(value).length}筆</span>

            <input
                type="button"
                value="選　擇"
                className={`px-4 py-2 rounded text-white font-semibold transition 
                ${selectedOption === '1' ? '' : 'hidden'} 
                ${Object.keys(selectedRows).length <= 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'}`}
                disabled={Object.keys(selectedRows).length <= 0}
                onClick={handleClick}
            />
            <input
                type="button"
                value="取　消"
                className={`px-4 py-2 rounded text-white font-semibold transition 
                ${selectedOption === '2' ? '' : 'hidden'} 
                ${Object.keys(selectedRows).length <= 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700 cursor-pointer'}`}
                disabled={Object.keys(selectedRows).length <= 0}
                onClick={handleClick}
            />

            {renderTable()}
            <div className="divider"></div>
        </div>
    );
};

export default PickArea;
