import React from "react";
import { Link } from "react-router-dom";

type Props = {
    labelName: string,
    to: string,
}

function ButtonRoute({ labelName, to, }: Props) {
    return (
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to={to}>{labelName}</Link>
        </li>
    );
}

export default ButtonRoute;
