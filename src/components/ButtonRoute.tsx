import React from "react";
import { Link } from "react-router-dom";

type Props = {
    labelName: string,
    to: string,
}

function ButtonRoute({ labelName, to, }: Props) {
    return (
        <li>
            <Link to={to}>{labelName}</Link>
        </li>
    );
}

export default ButtonRoute;
