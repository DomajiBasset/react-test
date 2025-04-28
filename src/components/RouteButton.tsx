import React from "react";
import { NavLink } from "react-router-dom";
import { getLeftMenuStyle } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";

type Props = {
    labelName: string,
    to: string,
    // icon: string,
    collapsed: boolean
};

function RouteButton({ labelName, to, }: Props) {
    const { state: themeState, dispatch } = useTheme();
    return (
        <li className={`${getLeftMenuStyle(themeState.color).link} ${getLeftMenuStyle(themeState.color).hover}`}>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `block p-2 cursor-pointer ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`
                }
            >
                {labelName}
            </NavLink>
        </li>
    );
};
export default RouteButton;
