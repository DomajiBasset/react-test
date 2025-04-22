import React, { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { zhTW } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    value: Date | null;
    onChange: (date: Date | null) => void;
};
const ReadOnlyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <input
        {...props}
        ref={ref}
        readOnly
        className="w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white text-sm"
        type='text' />
));
const DatePickerTest = ({ value, onChange }: Props) => {
    return (
        <>
            <DatePicker
                selected={value}
                onChange={onChange}
                dateFormat="yyyy/MM/dd"
                locale={zhTW}
                customInput={<ReadOnlyInput />}
            />
        </>
    );
};

export default DatePickerTest;