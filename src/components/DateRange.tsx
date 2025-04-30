import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { zhTW } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "./base/Input";

type Props = {
    startDate: Date;
    onStartChange: (date: Date | null) => void;
    endDate: Date;
    onEndChange: (date: Date | null) => void;
};
const ReadOnlyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <Input
        {...props}
        ref={ref}
        readOnly
    />
));
const DateRange = ({ startDate, onStartChange, endDate, onEndChange }: Props) => {

    return (
        <>
            <div className="flex items-center">
                <DatePicker
                    selected={startDate}
                    onChange={onStartChange}
                    selectsStart
                    startDate={startDate}
                    // endDate={endDate}
                    locale={zhTW}
                    customInput={<ReadOnlyInput></ReadOnlyInput>}
                />
                <div className="px-5">
                    <div className="w-5"></div>
                </div>
                <DatePicker
                    selected={endDate}
                    onChange={onEndChange}
                    selectsEnd
                    // startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale={zhTW}
                    customInput={<ReadOnlyInput></ReadOnlyInput>}
                />
            </div>
        </>
    );
};
export default DateRange;
