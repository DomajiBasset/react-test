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
        <Area iDiv={<><div>{label}</div></>} className={labelClassName} />
        <Area iDiv={children} className={childrenClassName} />
    </>
);

export default AreaWrapper;
