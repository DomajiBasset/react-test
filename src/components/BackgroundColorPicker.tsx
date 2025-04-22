import React, { useEffect } from 'react';
import { useState } from 'react';

const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
];
interface BackgroundColorPickerProps {
    initialColor?: string;
    onChange?: (color: string) => void;
}

const BackgroundColorPicker : React.FC<BackgroundColorPickerProps> = ({
    initialColor = colors[0],
    onChange,
}) => {
    const [selectedColor, setSelectedColor] = useState(initialColor);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSelectedColor(initialColor);
    }, [initialColor]);

    const handleSelect = (color: string) => {
        setSelectedColor(color);
        setOpen(false);
        onChange?.(color);
    };

    return (
        <div className={`relative inline-block text-right`}>
            <button
                onClick={() => setOpen(!open)}
                className={`w-10 h-10 rounded-full border-2 border-gray-400 shadow ${selectedColor} hover:scale-105 transition-transform duration-100`}
            ></button>


            {open && (
                <div className="absolute right-0 z-10 p-2 bg-white border rounded shadow grid grid-cols-3 gap-2 w-40">
                    {colors.map((color) => (
                        <button
                            key={color}
                            className={`w-8 h-8 rounded-full border-2 ${color} ${selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
                                }`}
                            onClick={() => handleSelect(color)}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BackgroundColorPicker ;
