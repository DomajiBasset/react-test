import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useTheme } from '../reducer/ThemeContext';
import { getBackgroundColor } from '../helpers/tool';
import { themeMap } from '../config/theme.config';

interface ThemeColorPickerProps {
    initialColor?: string;
    onChange?: (color: string) => void;
}

const ThemeColorPicker: React.FC<ThemeColorPickerProps> = ({
    onChange,
}) => {
    const { state, dispatch } = useTheme();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleSelect = (color: string) => {
        dispatch({ type: 'setColor', color });
        setOpen(false);
        onChange?.(color);
    };

    const handleOutsideClick = useCallback((event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    return (
        <div ref={wrapperRef} className={`relative inline-block text-right`}>
            <div className='flex item-center'>
                <button
                    onClick={() => setOpen(!open)}
                    className={`w-8 h-8 rounded-full border-2 border-gray-400 ${getBackgroundColor(state.color)} shadow hover:scale-105 transition-transform duration-100`}
                ></button>
            </div>

            {open && (
                <div className="absolute right-0 z-10 p-2 bg-white border rounded shadow grid grid-cols-3 gap-2 w-40">
                    {themeMap.colors.map((color) => (
                        <button
                            key={color}
                            className={`w-8 h-8 rounded-full border-2 ${getBackgroundColor(color)} ${state.color === color ? "ring-2 ring-offset-2 ring-black" : ""}`}
                            onClick={() => handleSelect(color)}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeColorPicker;
