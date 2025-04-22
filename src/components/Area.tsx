import React from "react";

type Props = {
    iDiv: React.ReactNode,
    className?: string
}

function Area({ iDiv, className }: Props) {
    return (
        <div className={`area ${className ? className : ''}`}>
            {iDiv}
        </div>
    );
}

const AreaWrapper = ({
    label,
    children,
    labelClassName = "",
    childrenClassName = "" }: { label: string; children: React.ReactNode, labelClassName?: string, childrenClassName?: string }) => (
    <>
        <div className="flex flex-col w-full">
            {/* 標籤區域 */}
            <Area iDiv={<div className={labelClassName}>{label}</div>} className="bg-gray-200 p-2" />

            {/* 內容區域 */}
            <Area iDiv={children} className={`bg-gray-100 p-2  ${childrenClassName}`} />
        </div>
    </>
);

export default AreaWrapper;
