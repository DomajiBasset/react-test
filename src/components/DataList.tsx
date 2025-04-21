import React from "react";
import { FormState } from "../reducer/formReducer";

type Props = {
    data: FormState[];
};

export const DataList = ({ data }: Props) => {
    return (
        <div>
            <h2>已送出資料</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        第{index + 1}筆 :
                        {item.startDate && new Date(item.startDate).toLocaleString("zh-TW", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}{" "}
                        <br></br>
                        從
                        {item.startPlace} → {item.endPlace} | {item.text}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};
