import React from "react";
import { routeConfig } from '../config/route.config';
import RouteButton from "./RouteButton";
import { getLeftMenuStyle } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";

function LeftMenu({ isCollapsed }: { isCollapsed: boolean }) {
    const { state: themeState } = useTheme();
    return (
        <>
            <div className={`min-h-screen h-auto ${getLeftMenuStyle(themeState.color).base} 
            overflow-hidden transition-all duration-200 ${isCollapsed ? 'w-0' : 'w-60'}
            max-[539px]:w-0 max-[539px]:invisible`}>
                <ul className="space-y-0 mt-16">
                    {routeConfig.map((route, index) => (
                        <RouteButton
                            key={index}
                            labelName={isCollapsed ? "" : route.labelName}
                            to={route.to}
                            collapsed={isCollapsed}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};
export default LeftMenu;
