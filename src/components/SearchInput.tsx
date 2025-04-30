import React, { forwardRef, InputHTMLAttributes, useEffect, useRef } from "react";
import { useState } from "react";
import { Input } from "./base/Input";

type Props = {
    suggestions: string[];
    onValueChange: (val: string) => void;
    placeholderCode?: string
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = forwardRef<HTMLInputElement, Props>(({ suggestions, onValueChange, placeholderCode = "", ...rest }, ref) => {
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const matched = suggestions.filter((s: string) =>
            s.toLowerCase().includes(value.toLowerCase())
        );
        setFiltered(matched);
        onValueChange(value);
        setShowSuggestions(true);
        if (value && matched.length === 0) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleFocus = () => {
        setFiltered(suggestions);
        if (!error) {
            setShowSuggestions(true);
        }
    };

    const handleSelect = (value: string) => {
        setShowSuggestions(false);
        setError(false);
        onValueChange(value);
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
                <Input
                    ref={ref}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    showError={error}
                    errorCode={"ERROR_NO_VALID_OPTION"}
                    placeholderCode={placeholderCode}
                    {...rest}
                ></Input>
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
});
