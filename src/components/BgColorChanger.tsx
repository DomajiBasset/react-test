import React from 'react';
import { useState } from 'react';

const BackgroundChanger = () => {
    const [bgColor, setBgColor] = useState('bg-red-500');

    return (
        <div>
            <button
                onClick={() => setBgColor('bg-green-500')}
                className="p-2 bg-gray-200 rounded"
            >
                改變背景顏色
            </button>

            <div className={`${bgColor} p-4`}>
                <h1>這個區塊的背景顏色會改變</h1>
            </div>
        </div>
    );
};

export default BackgroundChanger;
