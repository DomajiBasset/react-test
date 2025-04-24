import React, { useState } from "react";
import { routeConfig } from '../config/route.config';
import RouteButton from "./RouteButton";
import { getLeftMenuStyle } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";

function LeftMenu({ isCollapsed }: { isCollapsed: boolean }) {
    const { state: themeState, dispatch } = useTheme();
    return (
        <>
            <div className={`h-screen ${getLeftMenuStyle(themeState.color).base} overflow-hidden transition-all duration-200 ${isCollapsed ? 'w-0' : 'w-60'}`}>
                <ul className="space-y-0 mt-16">
                    {routeConfig.map((route, index) => (
                        <RouteButton
                            key={index}
                            labelName={isCollapsed ? "" : route.labelName}
                            to={route.to}
                            // icon={route.icon} // 若有圖示可加上
                            collapsed={isCollapsed} // 傳入狀態
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default LeftMenu;
