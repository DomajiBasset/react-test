import React, { useEffect, useRef } from "react";
import { useState } from "react";

type Props = {
    data: {
        type: string,
        size: number,
        value: string
    }
    onChange: (val: string) => void;
    suggestions: string[];
};

export const SearchInput = ({ data, suggestions, onChange }: Props) => {
    // const [input1, setInput] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // setInput(value);
        const matched = suggestions.filter((s: string) =>
            s.toLowerCase().includes(value.toLowerCase())
        );
        setFiltered(matched);
        setShowSuggestions(true);
        onChange(e.target.value);
    };

    const handleFocus = () => {
        setFiltered(suggestions);
        setShowSuggestions(true);
    };

    const handleSelect = (value: string) => {
        onChange(value);
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
            <div ref={wrapperRef} className="relative">
                <input
                    type={data.type}
                    size={data.size}
                    value={data.value}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
