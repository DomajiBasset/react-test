import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
    labelName: string,
    to: string,
    // icon: string,
    collapsed: boolean
}

function RouteButton({ labelName, to, }: Props) {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `block p-2 cursor-pointer ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                    }`
                }
            >
                {labelName}
            </NavLink>
        </li>
    );
}

export default RouteButton;
