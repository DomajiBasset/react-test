import React from 'react';
import { RowData } from '../config/pickItem.config';

interface PickItemProps {
    rowData: RowData;
    selected: boolean;
    onSelect: (id: string) => void;
}

const PickItem: React.FC<PickItemProps> = ({ rowData, selected, onSelect }) => {
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    data-pick={rowData.id}
                    checked={selected}
                    onChange={() => onSelect(rowData.id)}
                />
            </td>
            <td>{rowData.planNumber}</td>
            <td>{rowData.year}</td>
            <td className="data-table-text-left">{rowData.englishCode}</td>
            <td className="data-table-text-left">
                <div className="ellipsis" data-row="2">{rowData.title}</div>
            </td>
            <td className="data-table-text-left">{rowData.nature}</td>
            <td>{rowData.period}</td>
        </tr>
    );
};

export default PickItem;