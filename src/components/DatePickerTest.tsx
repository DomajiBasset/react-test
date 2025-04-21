import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
// import $ from 'jquery-vite'; //已在html 引入
import DatePicker from "react-datepicker";
import { zhTW } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    value: Date | null;
    onChange: (date: Date | null) => void;
};
const ReadOnlyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <input {...props} ref={ref} readOnly style={{ cursor: 'pointer' }} type='text' />
));
const DatePickerTest = ({ value, onChange }: Props) => {
    return (
        <DatePicker
            selected={value}
            onChange={onChange}
            dateFormat="yyyy/MM/dd"
            locale={zhTW}
            customInput={<ReadOnlyInput />}
        />
    );
};

export default DatePickerTest;