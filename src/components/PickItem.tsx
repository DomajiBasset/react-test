import React from 'react';
import { RowData } from '../config/pickItem.config';

interface PickItemProps {
    rowData: RowData;
    selected: boolean;
    onSelect: (id: string) => void;
}

const PickItem: React.FC<PickItemProps> = ({ rowData, selected, onSelect }) => {
    const handleRowClick = () => {
        onSelect(rowData.id);
    };

    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 避免點到 checkbox 時又觸發整列點選
    };

    return (
        <tr
            className={`hover:bg-gray-100 border-b transition duration-200 cursor-pointer ${selected ? 'bg-blue-50' : ''
                }`}
            onClick={handleRowClick}
        >
            <td className="px-4 py-2 text-center">
                <input
                    type="checkbox"
                    className='w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-400'
                    data-pick={rowData.id}
                    checked={selected}
                    onClick={handleCheckboxClick}
                    onChange={() => onSelect(rowData.id)}
                />
            </td>
            <td className='border-l border-gray-400 px-4 py-2 text-center'>{rowData.planNumber}</td>
            <td className='px-4 py-2 text-center'>{rowData.year}</td>
            <td className="px-4 py-2 data-table-text-left">{rowData.englishCode}</td>
            <td className="px-4 py-2 data-table-text-left">
                <div className=" line-clamp-2 text-sm text-gray-700" data-row="2">{rowData.title}</div>
            </td>
            <td className=" px-4 py-2 data-table-text-left">{rowData.nature}</td>
            <td className='px-4 py-2 text-center'>{rowData.period}</td>
        </tr>
    );
};

export default PickItem;