import React, { useEffect, useRef } from "react";
import { useState } from "react";

export const SearchInput = ({ iData, suggestions }: any) => {
    const [input1, setInput] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        const matched = suggestions.filter((s: string) =>
            s.toLowerCase().includes(value.toLowerCase())
        );
        setFiltered(matched);
        setShowSuggestions(true);
    };

    const handleFocus = () => {
        setFiltered(suggestions);
        setShowSuggestions(true);
    };

    const handleSelect = (value: string) => {
        setInput(value);
        setShowSuggestions(false);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div ref={wrapperRef} className="relative w-full">
                <input
                    type={iData.type1}
                    size={iData.size1}
                    value={input1}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                {showSuggestions && filtered.length > 0 && (
                    <ul className="absolute z-10 bg-white border mt-1 w-full rounded shadow max-h-60 overflow-y-auto">
                        {filtered.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
